import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '@services/tmdb.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [CommonModule, RouterModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  movieId!: number;
  movieDetails: any;
  genres: string[] = [];
  producers: string[] = [];
  cast: { name: string; character: string }[] = [];

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieId = +params['id'];
      this.fetchMovieDetails(movieId);
    });
  }

  fetchMovieDetails(movieId: number): void {
    this.tmdbService.getMovieDetails(movieId).subscribe((details) => {
      this.movieDetails = details;

      this.genres = details.genres.map((genre: any) => genre.name);

      this.producers = details.credits.crew
        .filter((crewMember: any) => crewMember.job === 'Producer')
        .map((producer: any) => producer.name);

      this.cast = details.credits.cast.slice(0, 7).map((actor: any) => ({
        name: actor.name,
        character: actor.character,
      }));
    });
  }
}
