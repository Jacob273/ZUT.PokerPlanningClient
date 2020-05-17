import { Component } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { SidebarService } from './sidebar/sidebar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  formFields: FormFieldTypes;

  title = 'ZUT-PokerPlanningClient';
  constructor(public sidebarservice: SidebarService) { 
    
    this.formFields = [
      {
        type: "username",
        label: "Username",
        placeholder: "Enter your email",
        required: true,
      },
      {
        type: "email",
        label: "Email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
        required: true,
      },
      {
        type: "given_name",
        label: "Name",
        placeholder: "Enter your name",
        required: true,
      },
      {
        type: "family_name",
        label: "Surname",
        placeholder: "Enter your surname",
        required: true,
      },
    ];
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
