import {Component, OnInit} from '@angular/core';
import {GetMoviesService} from '../../get-movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchQuery: string;

  constructor(private getMovies: GetMoviesService, private router: Router) {
  }

  ngOnInit() {
  }

  searchMovie() {
    this.router.navigate(['/search-results'], {queryParams: {query: this.searchQuery}});
  }
}
