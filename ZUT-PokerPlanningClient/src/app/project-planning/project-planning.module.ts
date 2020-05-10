import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPlanningRoutingModule } from './project-planning-routing.module';
import { ProjectPlanningComponent } from './project-planning.component';
import { GamesComponent } from './games/games.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameItemComponent } from './games/game-item/game-item.component';
import { GameDeckComponent } from './games/game-deck/game-deck.component';


@NgModule({
  declarations: [ProjectPlanningComponent, GamesComponent, MembersComponent, SettingsComponent, NavMenuComponent, GameItemComponent, GameDeckComponent],
  imports: [
    CommonModule,
    ProjectPlanningRoutingModule,
    NgbModule
  ],
  exports: [ProjectPlanningComponent, NavMenuComponent],
})
export class ProjectPlanningModule { }
