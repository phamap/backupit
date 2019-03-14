import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularComponent} from './movies/popular/popular.component';
import {MovieComponent} from './movies/movie/movie.component';
import {FavoriteListComponent} from './movies/favorite/list/favorite-list.component';
import {SearchResultsComponent} from './movies/search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: 'popular', component: PopularComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'favorite', component: FavoriteListComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
