import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerButtonComponent } from './spinner-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';

@NgModule({
	imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
	exports: [SpinnerButtonComponent],
	declarations: [SpinnerButtonComponent]
})
export class SpinnerButtonModule {}
