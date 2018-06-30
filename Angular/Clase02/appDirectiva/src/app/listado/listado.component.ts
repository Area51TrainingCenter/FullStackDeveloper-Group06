import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input() lista: Array<string>
	@Output() onBorrar = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	borrarUsuario(indice: number) {
		this.onBorrar.emit(indice)
	}

}
