import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPlanningRoutingModule } from './project-planning-routing.module';
import { ProjectPlanningComponent } from './project-planning.component';
import { GamesComponent } from './games/games.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProjectPlanningComponent, GamesComponent, MembersComponent, SettingsComponent, NavMenuComponent],
  imports: [
    CommonModule,
    ProjectPlanningRoutingModule,
    NgbModule
  ],
  exports: [NavMenuComponent],
})
export class ProjectPlanningModule { }
