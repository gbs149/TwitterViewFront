import { Component, OnInit } from '@angular/core';
import { TwitterSearchService } from './services/twitter-search.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TwitterViewFront';

  searchFormControl: FormControl;

  constructor(private search: TwitterSearchService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchFormControl = this.fb.control({value: ''});
    this.searchFormControl.valueChanges.subscribe(value =>
      this.search.search([value], 'recent')
    );
  }
}
