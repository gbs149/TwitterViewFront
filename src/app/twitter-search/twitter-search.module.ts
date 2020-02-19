import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchContainerComponent } from './search-container/search-container.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { HashtagListComponent } from './components/hashtag-list/hashtag-list.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';

@NgModule({
  declarations: [
    SearchContainerComponent,
    InputSearchComponent,
    HashtagListComponent,
    TweetCardComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [SearchContainerComponent]
})
export class TwitterSearchModule {}
