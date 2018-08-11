import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './cantante/listado/listado.component';
import { EdicionComponent } from './cantante/edicion/edicion.component';
import { NuevoComponent } from './cantante/nuevo/nuevo.component';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { AutorizacionGuard } from './guards/autorizacion.guard';
import { NoSalvadoGuard } from './guards/no-salvado.guard';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from './material/material.module';

const rutas: Route[] = [
	{ path: "", component: LoginComponent, pathMatch: "full" },
	{ path: "registro", component: RegistroComponent },
	{ path: "home", component: HomeComponent, canActivate: [AutenticacionGuard] },
	{
		path: "cantante", component: ListadoComponent, canActivate: [AutenticacionGuard], children: [
			{ path: "nuevo", component: NuevoComponent },
			{ path: "edicion", canActivate: [AutorizacionGuard], canDeactivate: [NoSalvadoGuard], component: EdicionComponent }
		]
	}
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListadoComponent,
		EdicionComponent,
		NuevoComponent,
		LoginComponent,
		RegistroComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
