import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-movies',
  imports: [CommonModule],
  templateUrl: './carousel-movies.component.html',
  styleUrl: './carousel-movies.component.css'
})
export class CarouselMoviesComponent {
  @Input() movies: string[] = [];
  @Input() title: string = '';
}
