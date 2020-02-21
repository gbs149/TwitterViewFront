import { Component, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @Input() inputFormControl: FormControl;
  @Input() searchEmmiter: EventEmitter<string>;

  search() {
    this.searchEmmiter.emit(this.inputFormControl.value);
  }
}
