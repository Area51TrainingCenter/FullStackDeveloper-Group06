import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/autenticacion.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable({
	providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate, CanActivateChild {
	constructor(private auth: AutenticacionService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.auth.esRol("operador");
	}

	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.auth.esRol("operador");
	}
}
