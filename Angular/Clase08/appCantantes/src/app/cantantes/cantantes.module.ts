import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CantantesRoutingModule } from './cantantes-routing.module';
import { ListadoCantantesComponent } from './listado-cantantes/listado-cantantes.component';
import { EdicionCantanteComponent } from './edicion-cantante/edicion-cantante.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
	imports: [
		CommonModule,
		CantantesRoutingModule,
		CompartidoModule,
		MaterialModule
	],
	declarations: [ListadoCantantesComponent, EdicionCantanteComponent],
	entryComponents: [EdicionCantanteComponent]
})
export class CantantesModule { }
