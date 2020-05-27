import { Component, OnInit, TemplateRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectService } from '../shared/services/project.service';
import { UserService } from '../shared/services/user.service';
import { ProjectDTO } from '../shared/DTO/project-dto';
import { MainMenuItem } from './../shared/model/main-menu-item';
import { SubMenuItem } from '../shared/model/sub-menu-item';
import { UIStateService } from '../shared/services/ui-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus : MainMenuItem[];
  modalRef: BsModalRef;
  private projectService: ProjectService;
  private uiService: UIStateService; 
  private userService: UserService;
  user: {firstName: string; lastName: string} = {firstName: "", lastName: ""}
  

  constructor(public sidebarservice: SidebarService, private modalService: BsModalService, projectService: ProjectService, userService: UserService, uiService: UIStateService) {
    this.menus = sidebarservice.generateStaticMenuList();
    this.projectService = projectService;
    this.userService = userService;
    this.uiService = uiService;
  }

  async ngOnInit() {
    this.userService.auth$.subscribe(({ firstName, lastName }) => {
      this.user.firstName = firstName;
      this.user.lastName = `${lastName.slice(0,1)}.`;
    });

    this.projectService.projectCreatedWithSuccess.subscribe(data => {
      const updatedSubmenus = this.menus.find(el => el.title === 'Projects').submenus;
      updatedSubmenus.push(new SubMenuItem(data.projectId, data.projectName));
      this.menus.find(el => el.title === 'Projects').submenus = updatedSubmenus;
      this.modalRef.hide();
    });
    const data = await this.projectService.getAllProjects();
    const projectSubmenus = data.projects.map((project) => new SubMenuItem(project.projectId, project.projectName));
    this.menus.find(el => el.title === 'Projects').submenus = projectSubmenus;
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return false;
  }

  changeProject(submenu: any) {
    this.uiService.setActiveProject(submenu);
    return;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return;
  }

  onAddNewProjectFormSubmit(project: ProjectDTO){
    this.projectService.postProject(project);
  }
}
