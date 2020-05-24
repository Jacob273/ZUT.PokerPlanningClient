import { Component, OnInit, EventEmitter } from '@angular/core';
import { GameItem } from './game-item';
import { Subscription } from 'rxjs';
import { GamesService } from './games.service';
import { GameDTO } from 'src/app/shared/DTO/game-dto';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(gamesService: GamesService) {
    this.gamesService = gamesService;
  }

  gameItems: GameItem[] = [];
  private gamesService: GamesService;
  private gamesSubscription: Subscription;

  ngOnInit(): void {
    this.gamesService.gameCreatedWithSuccess.subscribe((gameDTO: GameDTO)=> {
        this.GetAllGames();
      });
      
    this.GetAllGames();
  }

  private GetAllGames() {
    this.gamesSubscription = this.gamesService.getAllGames()
      .subscribe((gameItems: GameItem[]) => {
        this.gameItems = gameItems;
      }, (error: Error) => {
        console.log('An error occured while game items were retrieved.');
      }, () => {
      });
  }
}
