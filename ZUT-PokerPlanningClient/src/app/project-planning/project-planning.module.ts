import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPlanningRoutingModule } from './project-planning-routing.module';
import { ProjectPlanningComponent } from './project-planning.component';
import { GamesComponent } from './games/games.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [ProjectPlanningComponent, GamesComponent, MembersComponent, SettingsComponent],
  imports: [
    CommonModule,
    ProjectPlanningRoutingModule
  ]
})
export class ProjectPlanningModule { }
