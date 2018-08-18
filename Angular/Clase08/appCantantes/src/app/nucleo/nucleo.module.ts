import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
	imports: [
		CommonModule,
		NucleoRoutingModule,
		CompartidoModule
	],
	declarations: [LoginComponent, MenuLateralComponent, CabeceraComponent],
	exports: [CabeceraComponent, MenuLateralComponent]
})
export class NucleoModule { }
