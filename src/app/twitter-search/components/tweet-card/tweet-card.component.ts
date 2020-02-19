import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetCardComponent {
  @Input() tweet: Tweet | null | undefined;
}
