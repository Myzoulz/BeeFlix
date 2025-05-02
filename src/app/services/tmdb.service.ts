import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = '2f94711e12794c681d10526e06ece224';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  // Método para obter filmes em alta
  getTrendingMovies(): Observable<any> {
    const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Método para buscar detalhes de um filme
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Método para buscar imagens de um filme
  getMovieImages(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
