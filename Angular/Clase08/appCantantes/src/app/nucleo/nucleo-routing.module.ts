import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "cantante", loadChildren: "../cantantes/cantantes.module#CantantesModule" },
	{ path: "cancion", loadChildren: "../canciones/canciones.module#CancionesModule" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
