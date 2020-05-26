import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProjectDTO } from '../DTO/project-dto';
import { Observable, BehaviorSubject} from 'rxjs';
import {API} from 'aws-amplify';

export interface ProjectState{
  isActive: boolean;
  projectName: string | null;
  projectId?: string | null;
  projectType: 'private' | 'public' | null;
}

const initialProjectState : ProjectState = {
  isActive: false,
  projectName: null,
  projectId: null,
  projectType: null,
}

@Injectable({
  providedIn: 'root'
})
export class UIStateService {
  private readonly _project = new BehaviorSubject<ProjectState>(
    initialProjectState
  );

  readonly project$ = this._project.asObservable();

  constructor() {
  }

  setActiveProject(project: any): any {
    this._project.next({isActive: true, projectId: project.id, projectName: project.title, projectType: 'public'});
  }

}