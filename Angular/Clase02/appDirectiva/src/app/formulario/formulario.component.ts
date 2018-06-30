import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	nombreUsuario: string
	edad: number

	@Output() onNuevo = new EventEmitter<{}>()

	constructor() { }

	ngOnInit() {
	}

	agregar() {
		const datosUsuario = {
			nombreUsuario: this.nombreUsuario,
			edad: this.edad
		}
		if (this.nombreUsuario.trim() != "") {
			this.onNuevo.emit(datosUsuario)
			this.nombreUsuario = ""
			this.edad = 0
		}
		/*if (this.nombreUsuario.trim() != "") {
			this.onNuevo.emit(this.nombreUsuario)
			this.nombreUsuario = ""
		}*/
	}
}
