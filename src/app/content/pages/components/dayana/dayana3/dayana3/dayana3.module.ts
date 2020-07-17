import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dayana3Component } from './dayana3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Dayana3Component
      }
    ])
  ],
 // declarations: [Dayana3Component]
})
export class Dayana3Module { }
