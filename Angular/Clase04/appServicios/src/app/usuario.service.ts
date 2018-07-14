import { Injectable } from '@angular/core';
import { Iusuario } from 'src/app/iusuario';
import { EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	indiceAEditar: number

	private listaUsuarios: Iusuario[] = [
		{ nombre: "Andrea", apellido: "Hidalgo" },
		{ nombre: "Camila", apellido: "Aguilar" },
		{ nombre: "Luciana", apellido: "Zavala" },
		{ nombre: "Miguel", apellido: "Ayala" }
	]

	onEdicion = new EventEmitter<Iusuario>()

	constructor() { }

	listar(): Iusuario[] {
		return this.listaUsuarios
	}

	editar(ind: number) {
		const copia: Iusuario[] = JSON.parse(JSON.stringify(this.listaUsuarios))
		this.indiceAEditar = ind
		this.onEdicion.emit(copia[ind])
	}

	grabar(usuario: Iusuario) {
		this.listaUsuarios[this.indiceAEditar] = usuario
		this.indiceAEditar = undefined
	}


}
