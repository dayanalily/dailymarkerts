import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DayanaComponent } from './dayana.component';
import { Dayana3Component } from './dayana3/dayana3/dayana3.component';
import { Dayana2Component } from './dayana2/dayana2/dayana2.component';
import {
  MatIconRegistry,
  MatIcon,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTabsModule,
  MatTooltipModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatGridListModule,
  MatTableModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSortModule,
  MatDividerModule,
  MatStepperModule,
  MatChipsModule,
  MatPaginatorModule,
  MatDialogModule,
  MatRadioModule
 } from '@angular/material';
import { AccordionControlModule } from '../../../partials/content/general/accordion-control/accordion-control.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';
import { PartialsModule } from '../../../partials/partials.module';
import { CoreModule } from '../../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dayana1Component } from './dayana1/dayana1.component';


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
      {
        path: 'dayana3',
        component: Dayana3Component
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccordionControlModule.forRoot(),
    MaterialPreviewModule,
    PartialsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatSortModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [MatIconRegistry],
  entryComponents: [],
  exports: [RouterModule],
  declarations: [DayanaComponent, Dayana1Component,  Dayana2Component, Dayana3Component]
})
export class DayanaModule { }
