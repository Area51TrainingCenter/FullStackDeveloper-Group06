import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router"
import { HomeComponent } from "src/app/home/home.component";
import { CantanteComponent } from "src/app/cantante/cantante.component";
import { CantanteNuevoComponent } from "src/app/cantante-nuevo/cantante-nuevo.component";
import { CantanteEdicionComponent } from "src/app/cantante-edicion/cantante-edicion.component";
import { AutenticacionGuard } from "src/app/autenticacion.guard";
import { AutorizacionGuard } from "src/app/autorizacion.guard";

const rutas: Route[] = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{
		path: "cantante", component: CantanteComponent, canActivateChild: [AutenticacionGuard], children: [
			{ path: "nuevo", component: CantanteNuevoComponent },
			{ path: "edicion/:id", component: CantanteEdicionComponent, canActivate: [AutorizacionGuard] }
		]
	},
	{ path: "**", redirectTo: "" }
]

@NgModule({
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [
		RouterModule
	]
})
export class AppRouting { }