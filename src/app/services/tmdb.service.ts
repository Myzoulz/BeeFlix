import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../components/interfaces/movies';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '2f94711e12794c681d10526e06ece224';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`
    );
  }

  getMostViewedMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }

  getNowPlayingMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`
    );
  }

  getTopRatedMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`
    );
  }

  getblockbusterMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&sort_by=revenue.desc`
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&append_to_response=credits`
    );
  }
}
