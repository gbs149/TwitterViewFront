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
  styleUrls: ['./hashtag-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HashtagListComponent implements OnInit {
  @Input() hashtags: string[];
  @Output() emitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  remove(hashtag: string) {
    this.emitter.emit(hashtag);
  }
}
