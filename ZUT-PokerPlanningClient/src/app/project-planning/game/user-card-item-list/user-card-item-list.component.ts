import { Component, OnInit } from '@angular/core';
import { UserItem } from '../user-item';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-user-card-item-list',
  templateUrl: './user-card-item-list.component.html',
  styleUrls: ['./user-card-item-list.component.css']
})
export class UserCardItemListComponent implements OnInit {

  userItems: UserItem[] = [];
  private gameService: GameService;
  private gameSubscription: Subscription;

  constructor(gameService: GameService) { 
    this.gameService = gameService;
  }

  ngOnInit(): void {
    this.gameSubscription = this.gameService.getGameUsers()
      .subscribe((userItems: UserItem[]) => {
        this.userItems = userItems;
      }, (error: Error) => {
        console.log('An error occured while user items were retrieved.');
      }, () => {
        // subscription looks good!
      });
    }
}
