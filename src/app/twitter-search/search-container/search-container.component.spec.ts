import { TwitterSearchService } from './../services/twitter-search.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContainerComponent } from './search-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;
  let twitterSearch: TwitterSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchContainerComponent],
      providers: [
        { provide: TwitterSearchService, useValue: { search: jest.fn() } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    twitterSearch = TestBed.inject(TwitterSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
