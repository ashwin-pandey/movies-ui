import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.model';
import { DomSanitizer } from '@angular/platform-browser';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  id: number;
  movie: Movie[];
  // url: any

  dangerousVideoUrl: any;
  videoUrl: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.getSingleMovie(this.id);
    
  }

  getSingleMovie(id) {
    this.movieService.getSingleMovie(id).subscribe(
      response => {
        this.movie = response as any,
        console.log(response)
      },
      error => console.log(error.message)
    )
  }

  // pipe(map((res: Movie[]) => res.map(resp => this.dangerousVideoUrl = resp.movieurl)).

  updateVideoUrl(url: string): string {
    this.dangerousVideoUrl = url;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    return this.videoUrl;
  }

}
