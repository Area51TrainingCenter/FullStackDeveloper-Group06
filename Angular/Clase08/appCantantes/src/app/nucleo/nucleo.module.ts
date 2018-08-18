import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		NucleoRoutingModule,
		CompartidoModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule
	],
	declarations: [LoginComponent, MenuLateralComponent, CabeceraComponent],
	exports: [CabeceraComponent, MenuLateralComponent, NucleoRoutingModule]
})
export class NucleoModule { }
