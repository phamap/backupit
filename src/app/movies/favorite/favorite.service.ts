import {Injectable} from '@angular/core';
import {MovieModel} from '../movie.model';

@Injectable()
export class FavoriteService {

  getFavoriteIds() {
    const _ids = [];
    favorite.forEach(localMovie => _ids.push(localMovie.id));
    return _ids;
  }

  getFavorites(): MovieModel[] {
    return favorite;
  }

  toggleFavorite(movie) {
    let i = favorite.findIndex(item => item.id === movie.id);
    i > -1 ? favorite.splice(i, 1) : favorite.push(movie);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }
}

let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
