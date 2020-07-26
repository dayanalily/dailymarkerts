import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DayanaComponent } from './dayana.component';
import { Dayana3Component } from './dayana3/dayana3/dayana3.component';
import { Dayana2Component } from './dayana2/dayana2/dayana2.component';

import { AccordionControlModule } from '../../../partials/content/general/accordion-control/accordion-control.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';
import { PartialsModule } from '../../../partials/partials.module';
import { CoreModule } from '../../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dayana1Component } from './dayana1/dayana1.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  {
    path: '',
    component: DayanaComponent,
    children: [
      {
        path: 'dayana1',
        component: Dayana1Component
      },
      {
        path: 'dayana2',
        component: Dayana2Component
      },
      // {
      //   path: 'Animacion3',
      //   component: Dayana3Component
      // },
      
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

    MatCardModule,
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
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSortModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule

    // MatStepperModule,
    // MatRadioModule,
    // MatAutocompleteModule,
    // MatGridListModule
    // MatMenuModule,
    // MatListModule,
    // MatDividerModule,
    // MatSliderModule,
    // MatSidenavModule
  ],
  providers: [MatIconRegistry],
  entryComponents: [],
  exports: [RouterModule],
  declarations: [DayanaComponent, Dayana1Component, Dayana2Component, Dayana3Component]
})
export class DayanaModule { }
