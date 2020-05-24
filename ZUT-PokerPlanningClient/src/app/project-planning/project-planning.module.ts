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
import { HttpClientModule } from '@angular/common/http';
import { GameDeckComponent } from './game/game-deck/game-deck.component';
import { GameComponent } from './game/game.component';
import { UserCardItemComponent } from './game/user-card-item/user-card-item.component';
import { UserCardItemListComponent } from './game/user-card-item-list/user-card-item-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectPlanningComponent, GamesComponent, MembersComponent, SettingsComponent, NavMenuComponent, GameItemComponent, GameDeckComponent, GameComponent, UserCardItemComponent, UserCardItemListComponent],
  imports: [
    CommonModule,
    ProjectPlanningRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ProjectPlanningComponent, NavMenuComponent],
})
export class ProjectPlanningModule { }
