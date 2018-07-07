import { Component, OnInit } from '@angular/core';
import { IPersonal } from '../ipersonal';

@Component({
	selector: 'app-lista-personal',
	templateUrl: './lista-personal.component.html',
	styleUrls: ['./lista-personal.component.css']
})
export class ListaPersonalComponent implements OnInit {
	activos: Array<IPersonal> = [
		{ nombre: "Almendra", sexo: "mujer", area: "recursos humanos", seleccionado: false },
		{ nombre: "Pedro", sexo: "hombre", area: "administración", seleccionado: false },
		{ nombre: "Jana", sexo: "mujer", area: "recreación", seleccionado: false }
	]

	seleccionado: number

	cesados: Array<IPersonal> = []

	constructor() { }

	ngOnInit() {
	}

	cesar() {
		if (this.seleccionado != undefined) {
			const elementoExtraido: IPersonal = this.activos.splice(this.seleccionado, 1)[0]
			this.cesados.push(elementoExtraido)
			this.seleccionado = undefined
		}
	}

	seleccion(indice: number) {
		this.activos.forEach(item => item.seleccionado = false)
		this.activos[indice].seleccionado = true
		this.seleccionado = indice
	}

}
