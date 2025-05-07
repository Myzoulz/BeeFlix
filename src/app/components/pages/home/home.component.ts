import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../carousel/carousel.component";
import { TmdbService } from '@services/tmdb.service';
import { CarouselMoviesComponent } from '../../carousel-movies/carousel-movies.component';
import { Movie } from 'app/components/interfaces/movies';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CarouselMoviesComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [];
  mostViewedMovies: { id: number; poster: string }[] = [];
  nowPlayingMovies: { id: number; poster: string }[] = [];
  topRatedMovies: { id: number; poster: string }[] = [];
  blockbusterMovies: { id: number; poster: string }[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTrendingMovies().subscribe((data) => {
      this.images = data.results
        .slice(0, 5)
        .map((movie: any) => `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`);
    });

    this.tmdbService.getMostViewedMovies().subscribe((data) => {
      this.mostViewedMovies = data.results
        .map((movie: Movie) => ({
          id: movie.id,
          poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'assets/images/placeholder.jpg',
        }));
    });

    this.tmdbService.getNowPlayingMovies().subscribe((data) => {
      this.nowPlayingMovies = data.results
        .map((movie: Movie) => ({
          id: movie.id,
          poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'assets/images/placeholder.jpg',
        }));
    });

    this.tmdbService.getTopRatedMovies().subscribe((data) => {
      this.topRatedMovies = data.results
        .map((movie: Movie) => ({
          id: movie.id,
          poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'assets/images/placeholder.jpg',
        }));
    });

    this.tmdbService.getblockbusterMovies().subscribe((data) => {
      this.blockbusterMovies = data.results
        .map((movie: Movie) => ({
          id: movie.id,
          poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'assets/images/placeholder.jpg',
        }));
    });
  }
}
