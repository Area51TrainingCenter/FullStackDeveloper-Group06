import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './cantante/listado/listado.component';
import { EdicionComponent } from './cantante/edicion/edicion.component';
import { NuevoComponent } from './cantante/nuevo/nuevo.component';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

const rutas: Route[] = [
	{ path: "", component: LoginComponent, pathMatch: "full" },
	{ path: "home", component: HomeComponent },
	{
		path: "cantante", component: ListadoComponent, children: [
			{ path: "nuevo", component: NuevoComponent },
			{ path: "edicion", component: EdicionComponent }
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
		LoginComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
