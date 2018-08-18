import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-menu-lateral',
	templateUrl: './menu-lateral.component.html',
	styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

	@Output() onCerrarMenu = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	cerrarMenu() {
		this.onCerrarMenu.emit()
	}

}
