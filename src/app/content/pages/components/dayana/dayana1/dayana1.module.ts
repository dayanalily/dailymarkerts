import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dayana1Component } from './dayana1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Dayana1Component
      }
    ])
  ],
  // declarations: [Dayana1Component]
})
export class Dayana1Module { }
