import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUsuario } from '../usuario';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	@Input() item: IUsuario
	@Input() indice: number

	@Output() onEliminar = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	eliminar() {
		this.onEliminar.emit(this.indice)
	}

	ngOnDestroy() {
		console.log("Se ejecutó el ngOnDestroy")
	}

}
