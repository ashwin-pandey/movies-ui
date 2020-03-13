import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MoviesComponent } from './content/movies/movies.component';
import { SeriesComponent } from './content/series/series.component';
import { SingleMovieComponent } from './content/movies/single-movie/single-movie.component';
import { SingleSeriesComponent } from './content/series/single-series/single-series.component';
import { SingleSeasonComponent } from './content/series/single-series/single-season/single-season.component';
import { SingleEpisodeComponent } from './content/series/single-series/single-season/single-episode/single-episode.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movie/:id", component: SingleMovieComponent },
  { path: "series", component: SeriesComponent },
  { path: "series/:id", component: SingleSeriesComponent },
  { path: "series/:id/s/:sid", component: SingleSeasonComponent },
  { path: "series/:id/s/:sid/e/:eid", component: SingleEpisodeComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
