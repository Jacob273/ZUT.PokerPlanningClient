import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'project-planning', pathMatch: 'full'},
  { path: 'project-planning', loadChildren: () => import('./project-planning/project-planning.module').then(m => m.ProjectPlanningModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
