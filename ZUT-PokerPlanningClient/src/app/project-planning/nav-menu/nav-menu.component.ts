import { Component, OnInit, TemplateRef } from '@angular/core';
import { GamesService } from './../games/games.service';
import { GameDTO } from 'src/app/shared/DTO/game-dto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GameItem } from '../games/game-item';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  modalRef: BsModalRef;
  private gamesService: GamesService;
  private modalService: BsModalService;
  constructor(gamesService: GamesService, modalService: BsModalService) {
    this.gamesService = gamesService;
    this.modalService = modalService;
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return;
  }

  onAddNewGameFormSubmit(gameObj: GameDTO) {
    this.gamesService.postGame(gameObj).subscribe((response: any) => {
      this.modalRef.hide();
    }, (error: Error) => {
      console.log('An error occured while trying to create game.');
    }, () => {
      // subscription looks good!
    });
  }
}
