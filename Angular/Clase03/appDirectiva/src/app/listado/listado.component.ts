import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

	@Input() lista: Array<Usuario>
	@Output() onBorrar = new EventEmitter<number>()

	listaOriginal: Array<Usuario>

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		this.listaOriginal = changes.lista.currentValue
		console.log(changes)
	}

	borrarUsuario(indice: number) {
		this.onBorrar.emit(indice)
	}

	obtenerColor(edad: number): string {
		if (edad >= 0 && edad < 20) return 'rgba(0,255,0,0.3)'
		if (edad >= 20 && edad < 60) return 'rgba(255,0,0,0.3)'
		if (edad >= 60) return 'rgba(0,0,255, .3)'
	}

	obtenerColorAleatorio(): string {
		const aleatorio = Math.random() * 10

		if (aleatorio < 5) {
			return 'brown'
		}
		else {
			return 'pink'
		}
	}

	soyViejo(edad: number): boolean {
		if (edad >= 60) return true

		return false
	}

	soyJoven(edad: number): boolean {
		if (edad <= 40) return true

		return false
	}

	filtrar(nombreABuscar: string) {
		if (nombreABuscar.trim() === "") return this.lista = this.listaOriginal


		this.lista = this.lista.filter((item: any) => {
			return item.nombreUsuario.toLowerCase().trim().indexOf(nombreABuscar.toLowerCase().trim()) >= 0
		})
	}

}
