import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieModel} from './movies/movie.model';

@Injectable()
export class GetMoviesService {
  apiUrl = 'https://api.themoviedb.org/';
  apiKey = '=c8c0c5652c54ddde09026f695009ef6';

  constructor(private http: HttpClient) {
  }

  getPopularMovies(pageNumber: number) {
    return this.http.get<MovieModel[]>(
      this.apiUrl + '3/movie/popular?page=' + pageNumber + '&language=ru-RU&api_key' + this.apiKey + 'd'
    );
  }

  getGenres() {
    return this.http.get(
      this.apiUrl + '3/genre/movie/list?api_key' + this.apiKey + 'd&language=ru-RU'
    );
  }

  getMovie(_id: number) {
    return this.http.get<MovieModel>(
      this.apiUrl + '3/movie/' + _id + '?api_key' + this.apiKey + 'd&language=ru-RU'
    );
  }

  getMovieRecommendations(_id: number) {
    return this.http.get<MovieModel[]>(
      this.apiUrl + '3/movie/' + _id + '/recommendations?api_key' + this.apiKey + 'd&language=ru-RU&page=1'
    );
  }

  searchMovie(query: string) {
    return this.http.get<MovieModel[]>(
      this.apiUrl + '3/search/movie?api_key' + this.apiKey + 'd&language=ru-RU&query=' + query + '&include_adult=false'
    );
  }
}
