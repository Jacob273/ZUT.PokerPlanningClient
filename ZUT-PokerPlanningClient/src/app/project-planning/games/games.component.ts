import { Component, OnInit } from '@angular/core';
import { GameItem } from './game-item';
import { Subscription } from 'rxjs';
import { GamesService } from './games.service';

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
    this.gamesSubscription = this.gamesService.getAllGames()
      .subscribe((gameItems: GameItem[]) => {
        this.gameItems = gameItems;
      }, (error: Error) => {
        console.log('An error occured while game items were retrieved.');
      }, () => {
        // subscription looks good!
      });
  }

}
