import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GameItem } from './game-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameDTO } from 'src/app/shared/DTO/game-dto';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  
  private httpClient: HttpClient;
  private baseURL = environment.baseUrl;

  public gameCreatedWithSuccess;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.gameCreatedWithSuccess =  new EventEmitter<GameDTO>();
  }

  getAllGames(): Observable<GameItem[]> {
    return this.httpClient.get<GameItem[]>(`${this.baseURL}games`);
  }

  postGame(gameDTO: GameDTO): Observable<GameDTO> {

    const observablePostedGame = this.httpClient.post<any>(`${this.baseURL}games`, gameDTO);

    observablePostedGame.subscribe((response: GameDTO) => {
      this.gameCreatedWithSuccess.emit(response);
      console.log('emiting');
    }, (error: Error) => {
      console.log('An error occured while trying to create game.');
    }, () => {
      console.log('completed');
    });

    return observablePostedGame;
  }
}
