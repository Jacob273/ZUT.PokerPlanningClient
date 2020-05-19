import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPlanningComponent } from './project-planning.component';
import { GamesComponent } from './games/games.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: 'project-planning', component: ProjectPlanningComponent},
  {path: 'games', component: GamesComponent},
  {path: 'members', component: MembersComponent},
  {path: 'game', component: GameComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPlanningRoutingModule { }
