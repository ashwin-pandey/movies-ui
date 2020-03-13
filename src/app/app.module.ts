import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MoviesComponent } from './content/movies/movies.component';
import { SeriesComponent } from './content/series/series.component';
import { SingleMovieComponent } from './content/movies/single-movie/single-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleSeriesComponent } from './content/series/single-series/single-series.component';
import { SingleSeasonComponent } from './content/series/single-series/single-season/single-season.component';
import { SingleEpisodeComponent } from './content/series/single-series/single-season/single-episode/single-episode.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    SeriesComponent,
    SingleMovieComponent,
    SingleSeriesComponent,
    SingleSeasonComponent,
    SingleEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
