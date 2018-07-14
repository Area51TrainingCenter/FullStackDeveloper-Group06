import { Injectable } from "@angular/core"

@Injectable({
	providedIn: "root"
})
export class AutenticacionService {
	private logueado: boolean = true
	private rol: string = "admin"

	estaLogueado(): boolean {
		return this.logueado
	}

	esRol(rol: string) {
		return rol == this.rol
	}
}