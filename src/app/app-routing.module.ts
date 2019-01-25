import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { MatchesComponent } from './matches/matches.component';
import { AdminComponent } from './admin/admin.component';
import { InactiveComponent } from './inactive/inactive.component';
const routes: Routes = [
	{
		path: '', component: LoginComponent
	},
	{
		path: 'dashboard', component: DashboardComponent
	},
	{
		path: 'active', component: ActiveUsersComponent
	},
	{
		path: 'matches', component: MatchesComponent
	},
	{
		path: 'admin', component: AdminComponent
	},
	{
		path: 'inactive', component: InactiveComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
