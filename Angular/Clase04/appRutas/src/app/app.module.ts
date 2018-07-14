import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CantanteComponent } from './cantante/cantante.component';
import { CantanteEdicionComponent } from './cantante-edicion/cantante-edicion.component';
import { CantanteNuevoComponent } from './cantante-nuevo/cantante-nuevo.component';

const rutas: Route[] = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{ path: "cantante", component: CantanteComponent, pathMatch: "full" },
	{ path: "cantante/nuevo", component: CantanteNuevoComponent },
	{ path: "cantante/edicion/:id", component: CantanteEdicionComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CantanteComponent,
		CantanteEdicionComponent,
		CantanteNuevoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
