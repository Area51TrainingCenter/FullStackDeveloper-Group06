import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AutenticacionService } from "src/app/autenticacion.service";
import { CanActivateChild } from "@angular/router/src/interfaces";

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild {
	constructor(private ruteador: Router, private auth: AutenticacionService) { }

	canActivate() {
		if (this.auth.estaLogueado()) {
			return true
		} else {
			this.ruteador.navigate([""])
			return false
		}
	}

	canActivateChild() {
		if (this.auth.estaLogueado()) {
			return true
		} else {
			this.ruteador.navigate([""])
			return false
		}
	}

}