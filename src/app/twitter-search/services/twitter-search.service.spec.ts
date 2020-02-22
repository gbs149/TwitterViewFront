import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Tweet } from './../model/Tweet';
import { TwitterSearchService } from './twitter-search.service';

describe('TwitterSearchService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: TwitterSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new TwitterSearchService(httpClient);
  });

  it('should make a request to the twittersearch endpoint with the correct params', done => {
    const testData: Tweet[] = [
      {
        userName: 'name',
        text: 'Text',
        createdAt: new Date()
      }
    ];

    service.search(['query'], 'recent').subscribe(data => {
      expect(data).toEqual(testData);
      done();
    });

    const req = httpTestingController.expectOne(
      'https://twitter-view.herokuapp.com/api/twittersearch?resultType=recent&q=query'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
