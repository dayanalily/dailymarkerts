import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './header/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { IndexComponent } from './components/index/index.component';
import { Dayana1Component } from './components/dayana/dayana1/dayana1.component';
import { DayanaComponent } from './components/dayana/dayana.component';
import { RecuperarPasswordComponent } from './auth/recuperar-password/recuperar-password.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		// canActivate: [NgxPermissionsGuard],
		data: {
			permissions: {
				only: ['ADMIN', 'USER'],
				except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: '',
				component: IndexComponent,
				loadChildren: './components/index/index.module#IndexModule'
			},
			
			{
				path: 'dayana',
				component: DayanaComponent,
				loadChildren: './components/dayana/dayana.module#DayanaModule'
			},
			//  {
			// 	path: 'metronic',
			// 	loadChildren: './components/metronic/metronic.module#MetronicModule'
			// },

			// {
			// 	path: 'ngbootstrap',
			// 	loadChildren: './components/ngbootstrap/ngbootstrap.module#NgbootstrapModule'
			// },
			// {
			// 	path: 'material',
			// 	loadChildren: './components/material/material.module#MaterialModule'
			// },

			// {
			// 	path: 'user-management',
			// 	loadChildren: './components/user-management/user-management.module#UserManagementModule'
			// },
			// {
			// 	path: 'audit-log',
			// 	loadChildren: './components/apps/audit-log/audit-log.module#AuditLogModule'
			// },
			// {
			// 	path: 'builder',
			// 	loadChildren: './builder/builder.module#BuilderModule'
			// },
			// {
			// 	path: 'header/actions',
			// 	component: ActionComponent
			// },
			{
				path: 'profile',
				component: ProfileComponent,
			},
			
		]
	},
	{
		path: 'login',
		canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ROLE_ADMIN'
			}
		},
	},

	{
		path: '404',
		component: ErrorPageComponent
	},	{
		path: 'restablecer/:id', 
		component: RecuperarPasswordComponent
	},
	// {
	// 	path: 'error/:type',
	// 	component: ErrorPageComponent
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
