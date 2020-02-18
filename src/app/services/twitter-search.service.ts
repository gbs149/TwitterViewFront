import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Tweet {
  userName: string;
  text: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchService {
  private readonly url = 'https://twitter-view.herokuapp.com/api/twittersearch';

  constructor(private http: HttpClient) {}

  search(query: string[], resultType: string): Observable<Tweet[]> {
    const params = new HttpParams();
    params.set('resultType', resultType);
    query.forEach(q => params.append('q', q));
    return this.http.get<Tweet[]>(this.url, { params });
  }
}
