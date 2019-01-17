import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MeetingModule } from './meeting/meeting.module';
import { LoginComponent } from './user/login/login.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',component:LoginComponent},
      {path:'**',component:LoginComponent}
    ]),
    UserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MeetingModule,
    DashboardModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }