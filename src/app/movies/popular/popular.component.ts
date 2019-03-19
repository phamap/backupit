import { Component, OnInit } from '@angular/core';
import {GetMoviesService} from '../../get-movies.service';
import {Router} from '@angular/router';
import {FavoriteService} from '../favorite/favorite.service';
import {MovieModel} from '../movie.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  popular = [];
  totalPages: number;
  currentPage = 1;
  favoriteIds = [];
  genres;

  constructor(private getMovies: GetMoviesService, private router: Router, private favorite: FavoriteService) { }

  ngOnInit() {
    let that = this;
    this.getPopularMoviesByPageNum(this.currentPage);
    window.addEventListener('scroll', function (e) {
      if (document.body.scrollHeight === (window.pageYOffset + window.innerHeight)) {
        that.getPopularMoviesByPageNum(that.currentPage + 1);
        that.currentPage++;
      }
    });
    this.getMovies.getGenres().subscribe(genres => {
      this.genres = genres['genres'];
    });
    this.favoriteIds = this.favorite.getFavoriteIds();
  }

  getPopularMoviesByPageNum(pageNum: number) {
    this.getMovies.getPopularMovies(pageNum).subscribe((movies: MovieModel[]) => {
      this.popular = this.popular.concat(movies['results']);
      this.totalPages = movies['total_pages'];
    });
  }

  goToMovie(movieId) {
    this.router.navigate(['/movie', movieId]);
  }
}
