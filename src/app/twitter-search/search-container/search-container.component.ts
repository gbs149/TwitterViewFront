import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TwitterSearchService } from '../services/twitter-search.service';
import { Observable, of, from, fromEvent, Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit, OnDestroy {
  queries: string[] = [];
  searchFormControl = new FormControl('');
  search$: Subject<string[]> = new Subject();
  subscriptions = new Subscription();

  constructor(private search: TwitterSearchService) {}

  ngOnInit(): void {
    this.search$
      .pipe(switchMap(queries => this.search.search(queries, 'recent')))
      .subscribe(v => console.log(v));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  addQuery(): void {
    this.queries = [...this.queries, this.searchFormControl.value];
    this.search$.next(this.queries);
    console.log(this.queries);
  }
}
