import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetMoviesService} from '../../get-movies.service';
import {FavoriteService} from '../favorite/favorite.service';
import {MovieModel} from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  movie: MovieModel;
  recommendations: MovieModel[];
  genres;
  favoriteIds = [];

  constructor(
    private route: ActivatedRoute,
    private getMovies: GetMoviesService,
    private favoriteService: FavoriteService,
    private router: Router) { }

  ngOnInit() {
    this.getMovies.getGenres().subscribe(genres => this.genres = genres['genres']);

    this.getMovies.getMovie(this.route.snapshot.params['id']).subscribe(movie => {
      this.movie = movie;
    });

    this.getMovies.getMovieRecommendations(this.route.snapshot.params['id']).subscribe(recommendations => {
      this.recommendations = recommendations['results'];
    });

    this.favoriteIds = this.favoriteService.getFavoriteIds();

    this.route.params.subscribe(params => {
      this.getMovies.getMovie(this.route.snapshot.params['id']).subscribe(movie => {
        this.movie = movie;
      });
    });
  }
  goToMovie(movieId) {
    this.router.navigate(['/movie', movieId]);
  }
}
