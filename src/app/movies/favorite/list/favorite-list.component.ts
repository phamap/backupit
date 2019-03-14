import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../favorite.service';
import {Router} from '@angular/router';
import {GetMoviesService} from '../../../get-movies.service';
import {MovieModel} from '../../movie.model';

@Component({
  template: `
    <div class="row mt-5">
      <div class="col-md-4 mb-4" *ngFor="let movie of favorites">
        <div class="card pointer" (click)="goToMovie(movie.id)">
          <h6 class="card-header">
            {{movie.title}}
            <app-favorite [movie]="movie" [favoriteIds]="favoriteIds"></app-favorite>
          </h6>
          <div class="card-body">
            <img *ngIf="movie?.poster_path"
                 src="{{'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie?.poster_path}}" alt="" class="mb-3 img-fluid">
            <p>
              Жанр:
              <span class="badge badge-info mr-2" *ngFor="let genre of movie.genre_ids">{{genre | genre:genres}}</span>
              <span class="badge badge-info mr-2" *ngFor="let genre of movie?.genres">{{genre?.name}}</span>
            </p>
            {{movie.overview.length > 100 ? movie.overview.slice(0, 100) + '...' : movie.overview}}
          </div>
        </div>
      </div>
    </div>
  `
})
export class FavoriteListComponent implements OnInit {
  favorites: MovieModel[];
  favoriteIds;
  genres;
  favoriteService: FavoriteService = new FavoriteService();
  constructor(private router: Router, private getMovies: GetMoviesService) {}
  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
    this.favoriteIds = this.favoriteService.getFavoriteIds();
    this.getMovies.getGenres().subscribe(genres => this.genres = genres['genres']);
    console.log(this.favorites);
  }
  goToMovie(movieId) {
    this.router.navigate(['/movie', movieId]);
  }
}
