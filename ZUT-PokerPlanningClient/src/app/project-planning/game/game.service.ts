import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserItem } from './user-item';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private httpClient: HttpClient;
  private baseURL = environment.baseUrl;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getGameUsers(): Observable<UserItem[]> {
    return this.httpClient.get<UserItem[]>(`${this.baseURL}users`);
  }
}
