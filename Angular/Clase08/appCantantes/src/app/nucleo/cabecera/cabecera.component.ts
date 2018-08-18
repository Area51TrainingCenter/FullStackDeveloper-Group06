import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	@Output() onAbrirMenu = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	abrirMenu() {
		this.onAbrirMenu.emit()
	}

}
