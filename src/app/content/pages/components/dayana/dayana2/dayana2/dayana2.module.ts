import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dayana2Component } from './dayana2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: Dayana2Component
        }
      ])
  ],
  declarations: [Dayana2Component]
})
export class Dayana2Module { }
