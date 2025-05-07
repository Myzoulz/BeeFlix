import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel-movies',
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel-movies.component.html',
  styleUrl: './carousel-movies.component.css'
})
export class CarouselMoviesComponent {
  @Input() movies: { id: number; poster: string }[] = [];
  @Input() title: string = '';
}
