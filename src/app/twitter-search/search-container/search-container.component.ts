import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TwitterSearchService } from '../services/twitter-search.service';
import { fromEvent, Observable, merge, interval, of } from 'rxjs';
import { switchMap, map, filter, tap } from 'rxjs/operators';
import { Tweet } from '../model/Tweet';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  private readonly TWO_SECONDS = 2000;
  queries: string[] = [];
  searchFormControl = new FormControl('');
  tweets$: Observable<Tweet[]>;
  private button: HTMLElement;
  private clicks$: Observable<Event>;
  removeHashtagEmitter = new EventEmitter<string>();

  constructor(private twitterSearch: TwitterSearchService) {}

  ngOnInit(): void {
    this.button = document.getElementById('send-button');
    this.clicks$ = fromEvent(this.button, 'click');

    this.tweets$ = merge(
      this.addHashtag(),
      this.removeHashtag(),
      this.repeatSearch()
    );
  }

  private repeatSearch(): Observable<Tweet[]> {
    return interval(this.TWO_SECONDS).pipe(
      filter(_ => this.queries.length > 0),
      switchMap(_ => this.search())
    );
  }

  private removeHashtag(): Observable<Tweet[]> {
    return this.removeHashtagEmitter.pipe(
      tap((hashtag: string) => this.remove(hashtag)),
      switchMap(_ => (this.queries.length === 0 ? of([]) : this.search()))
    );
  }

  private addHashtag(): Observable<Tweet[]> {
    return this.clicks$.pipe(
      map(_ => this.searchFormControl.value),
      filter(value => Boolean(value)),
      tap(query => {
        this.queries = [...this.queries, query];
        this.searchFormControl.reset();
      }),
      switchMap(_ => this.search())
    );
  }

  private remove(hashtag: string): void {
    this.queries = this.queries.filter(tag => tag !== hashtag);
  }

  private search(): Observable<Tweet[]> {
    return this.twitterSearch.search(this.queries, 'recent');
  }
}
