import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../../../partials/partials.module';
import { ECommerceComponent } from './e-commerce.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Core
import { FakeApiService } from './_core/_server/fake-api.service';
// Core => Services
import { CustomersService } from './_core/services/index';
import { OrdersService } from './_core/services/orders.service';
import { ProductRemarksService } from './_core/services/index';
import { ProductSpecificationsService } from './_core/services/index';
import { ProductsService } from './_core/services/index';
import { SpecificationsService } from './_core/services/specification.service';
// Core => Utils
import { HttpUtilsService } from './_core/utils/http-utils.service';
import { TypesUtilsService } from './_core/utils/types-utils.service';
import { LayoutUtilsService } from './_core/utils/layout-utils.service';
import { InterceptService } from './_core/utils/intercept.service';
// Shared
import { ActionNotificationComponent } from './_shared/action-natification/action-notification.component';
import { DeleteEntityDialogComponent } from './_shared/delete-entity-dialog/delete-entity-dialog.component';
import { FetchEntityDialogComponent } from './_shared/fetch-entity-dialog/fetch-entity-dialog.component';
import { UpdateStatusDialogComponent } from './_shared/update-status-dialog/update-status-dialog.component';
import { AlertComponent } from './_shared/alert/alert.component';
// Customers
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerEditDialogComponent } from './customers/customer-edit/customer-edit.dialog.component';
// Products
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { RemarksListComponent } from './products/_subs/remarks/remarks-list/remarks-list.component';
import { SpecificationsListComponent } from './products/_subs/specifications/specifications-list/specifications-list.component';
import { SpecificationEditDialogComponent } from './products/_subs/specifications/specification-edit/specification-edit-dialog.component';
// Orders
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';
// Material

import { environment } from '../../../../../../environments/environment';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
	{
		path: '',
		component: ECommerceComponent,
		children: [
			{
				path: '',
				redirectTo: 'customers',
				pathMatch: 'full'
			},
			{
				path: 'customers',
				component: CustomersListComponent
			},
			{
				path: 'orders',
				component: OrdersListComponent
			},
			{
				path: 'products',
				component: ProductsListComponent,
			},
			{
				path: 'products/add',
				component: ProductEditComponent
			},
			{
				path: 'products/edit',
				component: ProductEditComponent
			},
			{
				path: 'products/edit/:id',
				component: ProductEditComponent
			},
		]
	}
];

@NgModule({
	imports: [
		MatDialogModule,
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		// MatMenuModule,
		MatSelectModule,
        MatInputModule,
		MatTableModule,
		// MatAutocompleteModule,
		// MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forFeature(FakeApiService) : []
	],
	providers: [
		InterceptService,
      	{
        	provide: HTTP_INTERCEPTORS,
       	 	useClass: InterceptService,
        	multi: true
      	},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'm-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		HttpUtilsService,
		CustomersService,
		OrdersService,
		ProductRemarksService,
		ProductSpecificationsService,
		ProductsService,
		SpecificationsService,
		TypesUtilsService,
		LayoutUtilsService
	],
	entryComponents: [
		ActionNotificationComponent,
		CustomerEditDialogComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		SpecificationEditDialogComponent
	],
	declarations: [
		ECommerceComponent,
		// Shared
		ActionNotificationComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		AlertComponent,
		// Customers
		CustomersListComponent,
		CustomerEditDialogComponent,
		// Orders
		OrdersListComponent,
		OrderEditComponent,
		// Products
		ProductsListComponent,
		ProductEditComponent,
		RemarksListComponent,
		SpecificationsListComponent,
		SpecificationEditDialogComponent
	]
})
export class ECommerceModule { }
