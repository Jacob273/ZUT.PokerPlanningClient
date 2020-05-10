import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GameItem } from './game-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private httpClient: HttpClient;
  private baseURL = environment.baseUrl;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllGames(): Observable<GameItem[]> {
    return this.httpClient.get<GameItem[]>(`${this.baseURL}games`);
  }


}
