import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { MatchesComponent } from './matches/matches.component';
import { AdminComponent } from './admin/admin.component';
import { InactiveComponent } from './inactive/inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ActiveUsersComponent,
    MatchesComponent,
    AdminComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
