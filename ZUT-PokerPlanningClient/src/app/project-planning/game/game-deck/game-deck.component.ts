import { Component, OnInit } from '@angular/core';
import { deck } from './deck';

@Component({
  selector: 'app-game-deck',
  templateUrl: './game-deck.component.html',
  styleUrls: ['./game-deck.component.css']
})
export class GameDeckComponent implements OnInit {
  deck = deck;
  constructor() { }

  ngOnInit(): void {
  }

}
