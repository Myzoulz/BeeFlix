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

  getTrendingMovies(): Observable<any> {
    const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMostViewedMovies(): Observable<any> {
    const url = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getNowPlayingMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
