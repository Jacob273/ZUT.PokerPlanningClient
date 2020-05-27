import { Component, OnInit, TemplateRef } from '@angular/core';
import { GamesService } from './../games/games.service';
import { GameDTO } from 'src/app/shared/DTO/game-dto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UIStateService } from 'src/app/shared/services/ui-state.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  project: {isActive: boolean; projectName: string, projectId: string};
  modalRef: BsModalRef;
  private uiService: UIStateService;
  private gamesService: GamesService;
  private modalService: BsModalService;
  constructor(gamesService: GamesService, modalService: BsModalService, uiStateService: UIStateService) {
    this.uiService = uiStateService;
    this.gamesService = gamesService;
    this.modalService = modalService;
  }

  ngOnInit(): void {
    this.uiService.project$.subscribe(({isActive, projectName, projectId}) => {
      this.project = {
        isActive,
        projectId,
        projectName,
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return;
  }

  async onAddNewGameFormSubmit(gameObj: GameDTO) {
    const data = await this.gamesService.postGame(gameObj, this.project.projectId);
    this.modalRef.hide();
  }
}
