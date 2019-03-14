import {Component, OnInit} from '@angular/core';
import {GetMoviesService} from '../../get-movies.service';
import {ActivatedRoute} from '@angular/router';
import {FavoriteService} from '../favorite/favorite.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  foundMovies;
  favoriteIds = [];
  genres;

  constructor(private getMovies: GetMoviesService, private route: ActivatedRoute, private favorite: FavoriteService) {
  }

  ngOnInit() {
    this.getMovies.getGenres().subscribe(genres => {
      this.genres = genres['genres'];
    });
    this.favoriteIds = this.favorite.getFavoriteIds();
    this.route.queryParams.subscribe(resp => {
      this.getMovies.searchMovie(resp['query'])
        .subscribe(movies => {
          this.foundMovies = movies['results'];
          console.log(this.foundMovies);
        });
    });
  }

}
