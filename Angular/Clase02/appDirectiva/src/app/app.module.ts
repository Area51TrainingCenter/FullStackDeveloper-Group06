import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectivaBasicaDirective } from './directiva-basica.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { EstadoCivilDirective } from './estado-civil.directive';

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		DirectivaBasicaDirective,
		EstadoCivilDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
