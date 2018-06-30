import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	nombreUsuario: string

	@Output() onNuevo = new EventEmitter<string>()

	constructor() { }

	ngOnInit() {
	}

	agregar() {
		if (this.nombreUsuario.trim() != "") {
			this.onNuevo.emit(this.nombreUsuario)
			this.nombreUsuario = ""
		}
	}
}
