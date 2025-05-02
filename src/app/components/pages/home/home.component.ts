import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "../../carousel/carousel.component";
import { TmdbService } from '@services/tmdb.service';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTrendingMovies().subscribe((data) => {
      // Usar o campo backdrop_path para imagens mais largas
      this.images = data.results
        .slice(0, 5) // Seleciona apenas os 5 primeiros filmes
        .map((movie: any) => `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`);
    });
  }
}
