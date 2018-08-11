import { Component, OnInit } from '@angular/core';

interface verificarDatos {
	datosNoSalvados: () => boolean
}

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, verificarDatos {

	constructor() { }

	ngOnInit() {
	}

	datosNoSalvados(): boolean {
		return true
	}

}
