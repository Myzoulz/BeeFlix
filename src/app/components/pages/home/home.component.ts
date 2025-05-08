import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../carousel/carousel.component";
import { TmdbService } from '@services/tmdb.service';
import { CarouselMoviesComponent } from '../../carousel-movies/carousel-movies.component';
import { CarouselMovie, MainCarouselItem, Movie } from 'app/components/interfaces/movies';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CarouselMoviesComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainCarousel: MainCarouselItem[] = [];
  movieCategories: { title: string; movies: CarouselMovie[] }[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTrendingMovies().subscribe((data: { results: Movie[] }) => {
      this.mainCarousel = data.results.slice(0, 5).map((movie) => ({
        id: movie.id,
        backdrop: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
      }));
    });

    this.tmdbService.getMostViewedMovies().subscribe((data: { results: Movie[] }) => {
      this.movieCategories.push({
        title: 'Filmes em Alta',
        movies: this.mapMoviesToCarousel(data),
      });
    });

    this.tmdbService.getBlockbusterMovies().subscribe((data: { results: Movie[] }) => {
      this.movieCategories.push({
        title: 'Sucessos de Bilheteria',
        movies: this.mapMoviesToCarousel(data),
      });
    });

    this.tmdbService.getNowPlayingMovies().subscribe((data: { results: Movie[] }) => {
      this.movieCategories.push({
        title: 'Nos Cinemas',
        movies: this.mapMoviesToCarousel(data),
      });
    });

    this.tmdbService.getTopRatedMovies().subscribe((data: { results: Movie[] }) => {
      this.movieCategories.push({
        title: 'Melhores Avaliados',
        movies: this.mapMoviesToCarousel(data),
      });
    });
  }

  private mapMoviesToCarousel(data: { results: Movie[] }): CarouselMovie[] {
    return data.results.map((movie) => ({
      id: movie.id,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
  }
}
