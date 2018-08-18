import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionesRoutingModule } from './canciones-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
	imports: [
		CommonModule,
		CancionesRoutingModule,
		CompartidoModule
	],
	declarations: []
})
export class CancionesModule { }
