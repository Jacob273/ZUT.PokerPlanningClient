import { Injectable, EventEmitter } from '@angular/core';
import { API } from 'aws-amplify';
import { GameDTO } from 'src/app/shared/DTO/game-dto';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  
  // TODO: add types
  public gameCreatedWithSuccess = new EventEmitter<any>();

  constructor() {}

  getAllGames(projectId): Promise<any> {
    return API.get('RestApi', `games?projectId=${projectId}`, {});
  }
  // TODO: add types
  async postGame(game: GameDTO, projectId: string): Promise<any> {
    const gameRequestData = {
      projectId,
      gameName: game.title,
      stories: game.stories.split('\n').map(storyName => ({
        storyName,
      }))
    };
    const data = await API.post('RestApi', 'games', {
      body: gameRequestData,    
    });
    this.gameCreatedWithSuccess.emit(data);
    return data;
  }
}
