import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCantantesComponent } from './listado-cantantes/listado-cantantes.component';

const routes: Routes = [
	{ path: "", component: ListadoCantantesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CantantesRoutingModule { }
