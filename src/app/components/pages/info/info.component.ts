import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '@services/tmdb.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieCastComponent } from "../../movie-cast/movie-cast.component";
import { MovieDetailsComponent } from "../../movie-details/movie-details.component";
import { CastMember, CrewMember, Genre, MovieDetails } from 'app/components/interfaces/movies';

@Component({
  selector: 'app-info',
  imports: [CommonModule, RouterModule, MovieCastComponent, MovieDetailsComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  movieId!: number;
  movieDetails!: MovieDetails;
  genres: Genre[] = [];
  producers: CrewMember[] = [];
  cast: CastMember[] = [];

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieId = +params['id'];
      this.fetchMovieDetails(movieId);
    });
  }

  fetchMovieDetails(movieId: number): void {
    this.tmdbService.getMovieDetails(movieId).subscribe((details: MovieDetails) => {
      this.movieDetails = details;

      this.genres = details.genres;

      this.producers = details.credits.crew.filter((crewMember) => crewMember.job === 'Producer');

      this.cast = details.credits.cast.slice(0, 7).map((actor) => ({
        name: actor.name,
        character: actor.character,
      }));
    });
  }
}
