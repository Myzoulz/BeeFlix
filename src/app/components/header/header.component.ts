import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TmdbService } from '@services/tmdb.service';
import { SearchComponent } from "../search/search.component";
import { Movie, SearchResult } from '../interfaces/movies';


@Component({
  selector: 'app-header',
  imports: [RouterModule, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchResults: Movie[] = [];

  constructor(private router: Router, private tmdbService: TmdbService) {}

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.trim();
    if (query.length > 2) {
      this.tmdbService.searchMovies(query).subscribe((data: SearchResult) => {
        this.searchResults = data.results;
      });
    } else {
      this.searchResults = [];
    }
  }

  onResultSelected(result: Movie): void {
    this.router.navigate(['/movie', result.id]);
    this.searchResults = [];
  }
}
