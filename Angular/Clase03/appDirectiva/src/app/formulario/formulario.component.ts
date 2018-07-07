import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IUsuario } from "../usuario"

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {
	usuario: IUsuario = {}
	/*nombreUsuario: string
	edad: number
	estado: string = "Casado"*/

	@Output() onNuevo = new EventEmitter<IUsuario>()

	constructor() {
		//this.usuario = new Usuario("", 0, "")
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
