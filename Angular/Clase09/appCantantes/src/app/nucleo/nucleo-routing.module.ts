import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacionGuard } from '../servicios/autenticacion.guard';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "cantante", loadChildren: "../cantantes/cantantes.module#CantantesModule", canLoad: [AutenticacionGuard] },
	{ path: "cancion", loadChildren: "../canciones/canciones.module#CancionesModule", canLoad: [AutenticacionGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
