import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SeguridadService {

	private usuarioLogueado: Usuario

	onCambioEstado = new EventEmitter<boolean>()

	listaUsuarios: Usuario[] = [
		{ correo: "sergio@correo.com", contrasena: "123", nombre: "Sergio" },
		{ correo: "andrea@correo.com", contrasena: "456", nombre: "Andrea" }
	]

	constructor(private ruteador: Router) { }

	login(usuario: Usuario) {
		const encontrado: number = this.listaUsuarios.findIndex(item => {
			return (item.correo === usuario.correo && item.contrasena === usuario.contrasena)
		})

		if (encontrado > -1) {
			this.usuarioLogueado = this.listaUsuarios[encontrado]
			localStorage.setItem("usuarioLogueado", JSON.stringify(this.usuarioLogueado))
			this.onCambioEstado.emit(true)
			this.ruteador.navigate(["/home"])

			console.log("Usuario encontrado")
		} else {
			console.log("Usuario no encontrado")
		}
	}

	logout() {
		this.usuarioLogueado = undefined
		localStorage.clear()
		this.ruteador.navigate([""])
		this.onCambioEstado.emit(false)
	}

	estaLogueado(): boolean {
		this.usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
		return this.usuarioLogueado ? true : false
	}
}
