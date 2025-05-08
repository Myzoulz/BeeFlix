import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselMovie } from '../interfaces/movies';

@Component({
  selector: 'app-carousel-movies',
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel-movies.component.html',
  styleUrl: './carousel-movies.component.css'
})
export class CarouselMoviesComponent {
  @Input() movies: CarouselMovie[] = [];
  @Input() title: string = '';
}
