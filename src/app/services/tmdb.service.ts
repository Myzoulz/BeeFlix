import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieDetails, SearchResult } from '../components/interfaces/movies';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private baseUrl = environment.apiBaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  private fetchFromApi<T>(endpoint: string, params: string = ''): Observable<T> {
    const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}${params}`;
    return this.http.get<T>(url);
  }

  getTrendingMovies(): Observable<{ results: Movie[] }> {
    return this.fetchFromApi<{ results: Movie[] }>('/trending/movie/week');
  }

  getMostViewedMovies(): Observable<{ results: Movie[] }> {
    return this.fetchFromApi<{ results: Movie[] }>('/movie/popular');
  }

  getNowPlayingMovies(): Observable<{ results: Movie[] }> {
    return this.fetchFromApi<{ results: Movie[] }>('/movie/now_playing');
  }

  getTopRatedMovies(): Observable<{ results: Movie[] }> {
    return this.fetchFromApi<{ results: Movie[] }>('/movie/top_rated');
  }

  getBlockbusterMovies(): Observable<{ results: Movie[] }> {
    return this.fetchFromApi<{ results: Movie[] }>('/discover/movie', '&sort_by=revenue.desc');
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.fetchFromApi<MovieDetails>(`/movie/${movieId}`, '&append_to_response=credits');
  }

  searchMovies(query: string): Observable<SearchResult> {
    return this.fetchFromApi<SearchResult>('/search/movie', `&query=${encodeURIComponent(query)}`);
  }
  }
