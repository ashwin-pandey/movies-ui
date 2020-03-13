import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseUrl = `http://localhost:8080`;

  constructor(
    private http: HttpClient
  ) { }

  getAllSeries() {
    return this.http.get(this.baseUrl + `/api/series/all`);
  }

  getSingleSeries(id) {
    return this.http.get(this.baseUrl + `/api/series/${id}`);
  }

  getAllSeason(id) {
    return this.http.get(this.baseUrl + `/api/series/${id}/season/all`);
  }

  getSingleSeason(id, sid) {
    return this.http.get(this.baseUrl + `/api/series/${id}/season/${sid}`);
  }

  getAllEpisode(id, sid) {
    return this.http.get(this.baseUrl + `/api/series/${id}/season/${sid}/episode/all`);
  }

  getSingleEpisode(id, sid, eid) {
    return this.http.get(this.baseUrl + `/api/series/${id}/season/${sid}/episode/${eid}`);
  }

}
