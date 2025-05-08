import { Component, Input } from '@angular/core';
import { CrewMember, Genre, MovieDetails } from '../interfaces/movies';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  @Input() movieDetails!: MovieDetails;
  @Input() genres: Genre[] = [];
  @Input() producers: CrewMember[] = [];

  getGenreNames(): string {
    return this.genres.map(genre => genre.name).join(', ');
  }

  getProducerNames(): string {
    return this.producers.map(producer => producer.name).join(', ');
  }
}
