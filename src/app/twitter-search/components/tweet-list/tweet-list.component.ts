import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent {
  @Input() tweets: Tweet[];
}
