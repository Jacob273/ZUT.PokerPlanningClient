import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from './../game-item';
import { DeckType } from '../deck-type.enum';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  DeckType = DeckType;

  @Input()  gameItem: GameItem;
  constructor() { }

  ngOnInit(): void {
  }

}
