import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from "../usuario"

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	usuario: Usuario
	/*nombreUsuario: string
	edad: number
	estado: string = "Casado"*/

	@Output() onNuevo = new EventEmitter<Usuario>()

	constructor() {
		this.usuario = new Usuario("", 0, "")
	}

	ngOnInit() {

	}

	agregar() {
		if (this.usuario.nombreUsuario.trim() != "") {
			this.onNuevo.emit(this.usuario)
		}

		/*const datosUsuario = {
			nombreUsuario: this.nombreUsuario,
			edad: this.edad
		}
		if (this.nombreUsuario.trim() != "") {
			this.onNuevo.emit(datosUsuario)
			this.nombreUsuario = ""
			this.edad = 0
		}*/
		/*if (this.nombreUsuario.trim() != "") {
			this.onNuevo.emit(this.nombreUsuario)
			this.nombreUsuario = ""
		}*/
	}
}
