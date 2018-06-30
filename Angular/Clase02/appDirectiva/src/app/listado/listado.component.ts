import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input() lista: Array<{}>
	@Output() onBorrar = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	borrarUsuario(indice: number) {
		this.onBorrar.emit(indice)
	}

	obtenerColor(edad: number): string {
		if (edad >= 0 && edad < 20) return 'rgba(0,255,0,0.3)'
		if (edad >= 20 && edad < 60) return 'rgba(255,0,0,0.3)'
		if (edad >= 60) return 'rgba(0,0,255, .3)'
	}

}
