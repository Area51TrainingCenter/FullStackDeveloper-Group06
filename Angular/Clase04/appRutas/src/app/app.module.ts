import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CantanteComponent } from './cantante/cantante.component';
import { CantanteEdicionComponent } from './cantante-edicion/cantante-edicion.component';
import { CantanteNuevoComponent } from './cantante-nuevo/cantante-nuevo.component';
import { NoEncontradaComponent } from './no-encontrada/no-encontrada.component';
import { AppRouting } from 'src/app/app.routing.module';
import { AutenticacionGuard } from 'src/app/autenticacion.guard';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CantanteComponent,
		CantanteEdicionComponent,
		CantanteNuevoComponent,
		NoEncontradaComponent
	],
	imports: [
		BrowserModule,
		AppRouting
	],
	providers: [AutenticacionGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
