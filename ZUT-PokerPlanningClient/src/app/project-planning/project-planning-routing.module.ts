import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPlanningComponent } from './project-planning.component';

const routes: Routes = [{ path: '', component: ProjectPlanningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPlanningRoutingModule { }
