import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccordionControlModule } from '../../../partials/content/general/accordion-control/accordion-control.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';
import { MetronicComponent } from './metronic.component';
import { AccordionComponent } from './accordion/accordion.component';
import { StickyFormActionsComponent } from './sticky-form-actions/sticky-form-actions.component';
import { FormsComponent } from './forms/forms.component';
import { CoreModule } from '../../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartialsModule } from '../../../partials/partials.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';




const routes: Routes = [
	{
		path: '',
		component: MetronicComponent,
		children: [
			{
				path: 'accordion',
				component: AccordionComponent
			},
			{
				path: 'sticky-form-actions',
				component: StickyFormActionsComponent
			},
			{
				path: 'forms',
				component: FormsComponent
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		AccordionControlModule,
		MaterialPreviewModule,
		PartialsModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
	
		MatTabsModule,
		MatTooltipModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatToolbarModule,
		MatExpansionModule,
		MatSortModule,
		MatPaginatorModule,
		MatDialogModule
	],
	exports: [RouterModule],
	entryComponents: [
	],
	providers: [MatIconRegistry],
	declarations: [
		MetronicComponent,
		AccordionComponent,
		StickyFormActionsComponent,
		FormsComponent,
	]
})
export class MetronicModule { }
