import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getUserByUsername(username) {
    return this.http.get(this.baseUrl + `/api/users/${username}`);
  }

}
