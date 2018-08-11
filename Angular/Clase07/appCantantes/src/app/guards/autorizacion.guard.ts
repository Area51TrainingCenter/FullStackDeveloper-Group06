import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
	providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate, CanActivateChild {
	constructor(private seguridadService: SeguridadService, private ruteador: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		const esSuRol: boolean = this.seguridadService.rolDelUsuario("admin")
		if (!esSuRol) this.ruteador.navigate([""])
		//alert("No está autorizado")

		return esSuRol;
	}

	canActivateChild(): boolean {
		const esSuRol: boolean = this.seguridadService.rolDelUsuario("admin")
		if (!esSuRol) this.ruteador.navigate([""])
		//alert("No está autorizado")

		return esSuRol;
	}
}
