import { Component, OnInit } from '@angular/core';
import { GameItem } from './game-item';
import { GamesService } from './games.service';
import { UIStateService } from 'src/app/shared/services/ui-state.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  constructor(gamesService: GamesService, uiService: UIStateService) {
    this.gamesService = gamesService;
    this.uiService = uiService;
  }

  gameItems: GameItem[] = [];
  private fetchedProjectId = '';
  private gamesService: GamesService;
  private uiService: UIStateService;

  async ngOnInit(): Promise<void> {
    this.uiService.project$.subscribe(async (data) => {
      if(this.fetchedProjectId !== data.projectId){
        this.fetchedProjectId = data.projectId;
        const {games} = await this.gamesService.getAllGames(data.projectId);
        this.gameItems = games;
      }
    });

    this.gamesService.gameCreatedWithSuccess.subscribe(async (game) => {
      const copyGameItems = [...this.gameItems];
      copyGameItems.unshift(game);
      this.gameItems = copyGameItems;
    });
  }
}
