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

@NgModule({
  declarations: [SearchContainerComponent, InputSearchComponent],

    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule],
  exports: [SearchContainerComponent]
})
export class TwitterSearchModule {}
