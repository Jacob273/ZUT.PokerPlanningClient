import { Injectable, EventEmitter } from '@angular/core';
import { ProjectDTO } from '../DTO/project-dto';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projectCreatedWithSuccess = new EventEmitter<any>();

  constructor() {}

  async postProject(project: ProjectDTO): Promise<void> {
    const data = await API.post('RestApi', 'projects', {body: project});
    this.projectCreatedWithSuccess.emit(data);
  }
  //TODO: Change any
  getAllProjects(): Promise<any> {
    return API.get('RestApi', 'projects', {});
  }
}