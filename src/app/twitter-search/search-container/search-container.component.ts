import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TwitterSearchService } from '../services/twitter-search.service';
import { fromEvent, Subject, Subscription, Observable } from 'rxjs';
import { switchMap, map, filter, tap, take } from 'rxjs/operators';
import { Tweet } from '../model/Tweet';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit, OnDestroy {
  queries: string[] = [];
  searchFormControl = new FormControl('');
  subscription: Subscription;
  button: HTMLElement;
  clicks$: Observable<Event>;
  tweet: Tweet;

  constructor(private search: TwitterSearchService) {}

  ngOnInit(): void {
    this.button = document.getElementById('send-button');
    this.clicks$ = fromEvent(this.button, 'click');

    this.subscription = this.clicks$
      .pipe(
        map(_ => this.searchFormControl.value),
        filter(value => Boolean(value)),
        tap(query => (this.queries = [...this.queries, query])),
        tap(_ => this.searchFormControl.reset()),
        switchMap(_ => this.search.search(this.queries, 'recent')),
        take(1)
      )
      .subscribe(t => (this.tweet = t[0]));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  remove(hashtag: string) {
    this.queries = this.queries.filter(tag => tag !== hashtag);
  }
}
