import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { SidebarService } from './sidebar/sidebar.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  isLoggedIn = false;
  formFields: FormFieldTypes;
  

  title = 'ZUT-PokerPlanningClient';
  constructor(public sidebarservice: SidebarService, private userSerivce: UserService) { 
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

  ngOnInit(){
    this.userSerivce.isLoggedIn$.subscribe(
      isLoggedIn => {
        console.log(isLoggedIn);

        return this.isLoggedIn = isLoggedIn;
      }
    );
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
