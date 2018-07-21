import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate, CanActivateChild {
	constructor(private seguridadService: SeguridadService, private ruteador: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		const estaLogueado: boolean = this.seguridadService.estaLogueado()
		if (!estaLogueado) this.ruteador.navigate([""])

		return estaLogueado;
	}

	canActivateChild(): boolean {
		const estaLogueado: boolean = this.seguridadService.estaLogueado()
		if (!estaLogueado) this.ruteador.navigate([""])

		return estaLogueado;
	}
}
