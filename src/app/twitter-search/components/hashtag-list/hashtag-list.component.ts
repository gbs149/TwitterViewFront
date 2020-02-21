import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HashtagListComponent {
  @Input() hashtags: string[];
  @Input() removeHashtag: EventEmitter<string>;
}
