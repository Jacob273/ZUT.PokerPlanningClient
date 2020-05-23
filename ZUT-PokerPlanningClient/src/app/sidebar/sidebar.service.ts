import { Injectable } from '@angular/core';
import { ProjectService } from './../shared/services/project.service';
import { MainMenuItem } from '../shared/model/main-menu-item';
import { Badge } from '../shared/model/badge';
import { ProjectDTO } from '../shared/DTO/project-dto';
import { SubMenuItem } from '../shared/model/sub-menu-item';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  toggled = false;
  _hasBackgroundImage = true;
  projects: ProjectDTO[];
  mainMenuItems: MainMenuItem[];

  generateStaticMenuItems(): MainMenuItem[] {
    this.mainMenuItems = new Array();
    this.mainMenuItems.push(new MainMenuItem('General', 'header', null, null, null, null));
    this.mainMenuItems.push(new MainMenuItem('Projects', 'dropdown', 'fa fa-tachometer-alt', false, new Badge('badge-warning', null), null));
    this.mainMenuItems.push(new MainMenuItem('Chat', 'simple', 'fa fa-comments', false, null, null));
    this.mainMenuItems.push(new MainMenuItem('Friends', 'simple', 'fa fa-user-friends', false, null, null));
    this.mainMenuItems.push(new MainMenuItem('Others', 'header', null, null, null, null));
    this.mainMenuItems.push(new MainMenuItem('History', 'simple', 'fa fa-history', null, null, null));
    this.mainMenuItems.push(new MainMenuItem('Import/Export', 'simple', 'fa fa-file-import', false, null, null));
    this.mainMenuItems.push(new MainMenuItem('Introduction', 'simple',  'fa fa-info', false, null, null));
    return this.mainMenuItems;
  }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  generateStaticMenuList() {
    this.generateStaticMenuItems();
    return this.mainMenuItems;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  
}