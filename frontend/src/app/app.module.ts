import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticationService } from 'src/services/authentication.service';
import { CalculePrixComponent } from './calcule-prix/calcule-prix.component';
//import { LogoutComponent } from './logout/logout.component';

const appRoutes:Routes=[
  {path:"login", component:LoginComponent},
  {path:"tasks", component:TasksComponent},
  {path:"new-task", component:NewTaskComponent},
  {path:"register", component:RegistrationComponent},
  {path:"calcule-prix", component:CalculePrixComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent,
    CalculePrixComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
