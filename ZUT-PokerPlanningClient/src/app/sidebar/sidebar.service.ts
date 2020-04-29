import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Projects',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Project AAAAA',
          id: 1,
        },
        {
          title: 'Project BBBB',
          id: 2,
        },
        {
          title: 'Project CCCC',
          id: 3,
        }
      ]
    },
    {
      title: 'Chat',
      icon: 'fa fa-comments',
      active: false,
      type: 'simple,',
    },
    {
      title: 'Friends',
      icon: 'fa fa-user-friends',
      active: false,
      type: 'simple,',
    },
    {
      title: 'Others',
      type: 'header'
    },
    {
      title: 'History',
      icon: 'fa fa-history',
      active: false,
      type: 'simple',
    },
    {
      title: 'Import/Export',
      icon: 'fa fa-file-import',
      active: false,
      type: 'simple',
    },
    {
      title: 'Introduction',
      icon: 'fa fa-info',
      active: false,
      type: 'simple',
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  
}