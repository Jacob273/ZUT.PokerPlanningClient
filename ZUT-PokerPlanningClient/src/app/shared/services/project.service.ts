import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProjectDTO } from '../DTO/project-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private httpClient: HttpClient;
  private baseURL = environment.baseUrl;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  postProject(projectDTO: ProjectDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}projects`, projectDTO);
  }

  getAllProjects(): Observable<ProjectDTO[]> {
    return this.httpClient.get<ProjectDTO[]>(`${this.baseURL}projects`);
  }
}