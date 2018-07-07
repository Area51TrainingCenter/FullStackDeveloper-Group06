import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { IUsuario } from "../usuario"


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {
	@ViewChild("nombreUsuario") nombreUsuario: ElementRef
	@ViewChild("edad") edad: ElementRef
	@ViewChild("estado") estado: ElementRef

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
		if (this.nombreUsuario.nativeElement.value.trim() != "") {
			this.usuario.nombreUsuario = this.nombreUsuario.nativeElement.value
			this.usuario.edad = +this.edad.nativeElement.value
			this.usuario.estado = this.estado.nativeElement.value

			this.onNuevo.emit(this.usuario)
		}
		/*if (this.usuario.nombreUsuario.trim() != "") {
			this.onNuevo.emit(this.usuario)
		}*/

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
