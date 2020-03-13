import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(
      response => {
        this.movies = response as any
      },
      error => console.log(error.message)
    )
  }

}
