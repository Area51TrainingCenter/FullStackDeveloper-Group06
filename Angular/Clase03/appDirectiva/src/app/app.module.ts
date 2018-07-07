import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectivaBasicaDirective } from './directiva-basica.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { EstadoCivilDirective } from './estado-civil.directive';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaPersonalComponent } from './lista-personal/lista-personal.component';
import { ActivoComponent } from './activo/activo.component';
import { CesadoComponent } from './cesado/cesado.component';
import { UsuarioService } from './usuarios.service';
import { UtilitarioService } from './utilitario.service';

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		DirectivaBasicaDirective,
		EstadoCivilDirective,
		DatosUsuarioComponent,
		UsuarioComponent,
		ListaPersonalComponent,
		ActivoComponent,
		CesadoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [UsuarioService, UtilitarioService],
	bootstrap: [AppComponent]
})
export class AppModule { }
