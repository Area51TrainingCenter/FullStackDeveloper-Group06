import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ConfirmacionComponent],
	exports: [ConfirmacionComponent],
	entryComponents: [ConfirmacionComponent]
})
export class CompartidoModule { }
