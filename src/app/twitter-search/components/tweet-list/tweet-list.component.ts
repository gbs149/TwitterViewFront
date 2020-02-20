import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent implements OnInit {
  @Input() tweets: Tweet[]

  constructor() { }

  ngOnInit(): void {
  }

}
