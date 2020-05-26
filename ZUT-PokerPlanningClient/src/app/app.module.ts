import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { Auth } from 'aws-amplify';
import { ProjectPlanningModule } from './project-planning/project-planning.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import {environment} from '../environments/environment';

Amplify.configure({
  Auth:{
    mandantorySignIn: true,
    userPoolId: environment.USER_POOL_ID,
    userPoolWebClientId: environment.USER_POOL_CLIENT_ID,
    region: environment.REGION,
  },
  API:{
    endpoints: [
      {
        name: "RestApi",
        endpoint: environment.REST_API,
        custom_header: async () => { 
          return {  Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`, }
        }
      }
    ]
  }
});

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    ProjectPlanningModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
