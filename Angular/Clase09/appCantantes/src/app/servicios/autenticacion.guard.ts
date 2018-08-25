import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable()
export class AutenticacionGuard implements CanLoad {

	constructor(private seguridadService: SeguridadService, private ruteador: Router) { }

	canLoad() {
		//this.ruteador.navigate(["/"])
		return this.seguridadService.estaAutenticado()
	}
}
