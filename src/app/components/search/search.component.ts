import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() results: Movie[] = [];
  @Output() resultSelected = new EventEmitter<Movie>();

  selectResult(result: Movie): void {
    this.resultSelected.emit(result);
  }
}
