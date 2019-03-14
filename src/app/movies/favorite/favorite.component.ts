import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from './favorite.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {
  @Input() movie;
  @Input() favoriteIds;
  public isFavorite: boolean;
  public movieId: string;

  constructor(private favorite: FavoriteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.checkFavorite(this.movie.id);
    this.route.params.subscribe(resp => {
      this.movieId = resp.id;
      this.checkFavorite(this.movieId);
    });
  }

  toggleFavorite(movie, e) {
    e.preventDefault();
    e.stopPropagation();
    this.favoriteIds = this.favorite.toggleFavorite(movie);
    this.checkFavorite(this.movieId);
  }

  checkFavorite(movieId) {
    if (movieId) {
      this.favoriteIds.find(id => id === +movieId) ? this.isFavorite = true : this.isFavorite = false;
    }
  }
}
