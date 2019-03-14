import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenresPipe implements PipeTransform {
  genres = [];

  constructor() {}

  transform(_id, genres?) {
    if (genres) {
      const genreFound = genres.find(genre => genre.id === _id);
      return genreFound.name;
    }
  }
}
