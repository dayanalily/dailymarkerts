import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
  MatPaginatorModule,
    RouterModule.forChild([
      {
        path: 'index',
        component: IndexComponent
      }
    ])
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }


