import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {GetMoviesService} from './get-movies.service';
import {NavbarComponent} from './navbar/navbar/navbar.component';
import {PopularComponent} from './movies/popular/popular.component';
import {GenresPipe} from './pipes/genres.pipe';
import {MovieComponent} from './movies/movie/movie.component';
import {FavoriteComponent} from './movies/favorite/favorite.component';
import {FavoriteService} from './movies/favorite/favorite.service';
import {FavoriteListComponent} from './movies/favorite/list/favorite-list.component';
import { SearchResultsComponent } from './movies/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    GenresPipe,
    MovieComponent,
    FavoriteComponent,
    FavoriteListComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GetMoviesService,
    FavoriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
