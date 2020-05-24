import { Component, OnInit, TemplateRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectService } from '../shared/services/project.service';
import { UserService } from '../shared/services/user.service';
import { ProjectDTO } from '../shared/DTO/project-dto';
import { MainMenuItem } from './../shared/model/main-menu-item';
import { SubMenuItem } from '../shared/model/sub-menu-item';

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
  projectService: ProjectService;
  userService: UserService;
  user: {firstName: string; lastName: string} = {firstName: "", lastName: ""}
  

  constructor(public sidebarservice: SidebarService, private modalService: BsModalService, projectService: ProjectService, userService: UserService) {
    this.menus = sidebarservice.generateStaticMenuList();
    this.projectService = projectService;
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.auth$.subscribe(({ firstName, lastName }) => {
      console.log(firstName);
      this.user.firstName = firstName;
      this.user.lastName = `${lastName.slice(0,1)}.`;
    });

    this.projectService.getAllProjects()
      .subscribe((projects: ProjectDTO[]) => {
    let _subMenus : SubMenuItem[] = new Array();
      
       for(var i = 0 ; i < projects.length; i++){
        _subMenus.push(new SubMenuItem(projects[i].id, projects[i].name));
       }  

       this.menus.find(x => x.title === 'Projects').submenus = _subMenus

     }, (error: Error) => {
       console.log('An error occured while projects items were retrieved.');
     }, () => {
       // subscription looks good!
     });

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
    console.log(submenu.id);
    return;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return;
  }

  onAddNewProjectFormSubmit(project: ProjectDTO){
    console.log(project);

    this.projectService.postProject(project).subscribe((response: any) => {
      console.log(response);
    }, (error: Error) => {
      console.log('An error occured while trying to add a project.');
    }, () => {
      console.log('completed');
    // subscription looks good!
    });
  }
}
