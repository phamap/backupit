import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {
  @Input() movie;
  @Input() favoriteIds;
  public isFavorite = false;

  constructor(private favorite: FavoriteService) {}

  ngOnInit() {
    if (this.movie.id) {
      this.favoriteIds.find(id => id === this.movie.id) ? this.isFavorite = true : this.isFavorite = false;
    }
  }

  toggleFavorite(movie, e) {
    e.preventDefault();
    e.stopPropagation();
    this.favorite.toggleFavorite(movie);
    this.isFavorite = !this.isFavorite;
  }
}
