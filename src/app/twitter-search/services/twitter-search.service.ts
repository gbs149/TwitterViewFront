import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../model/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchService {
  private readonly url = 'https://twitter-view.herokuapp.com/api/twittersearch';

  constructor(private http: HttpClient) {}

  search(query: string[], resultType: string): Observable<Tweet[]> {
    let queryParams = this.prepareQueryParams(resultType, query);

    return this.http.get<Tweet[]>(this.url, { params: queryParams });
  }

  private prepareQueryParams(resultType: string, query: string[]) {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('resultType', resultType);
    query.forEach(q => (queryParams = queryParams.append('q', q)));
    return queryParams;
  }
}
