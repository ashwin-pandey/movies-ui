import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = `http://localhost:8080/api/movies/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies() {
    return this.http.get(this.baseUrl + `all`);
  }

  getSingleMovie(id: any) {
    return this.http.get(this.baseUrl + `${id}`);
  }

}
