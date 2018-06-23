import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppMiComponente } from "./miComponente.component";
import { ExitoComponent } from './exito/exito.component';
import { FallaComponent } from './falla/falla.component';
import { PropietarioComponent } from './propietario/propietario.component';

@NgModule({
	declarations: [
		AppComponent, AppMiComponente, ExitoComponent, FallaComponent, PropietarioComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppMiComponente]
})
export class AppModule { }
