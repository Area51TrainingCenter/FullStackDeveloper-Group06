import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { IPersonal } from '../ipersonal';

@Component({
	selector: 'app-activo',
	templateUrl: './activo.component.html',
	styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {
	@Input() lista: IPersonal[]
	@Output() seleccionado = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
		console.log("Lista")
		console.log(this.lista)
	}

	seleccionar(persona: IPersonal, ind) {
		this.seleccionado.emit(ind)
	}

	obtenerColor(estado) {
		if (estado) return "yellow"
		return ""
	}

}
