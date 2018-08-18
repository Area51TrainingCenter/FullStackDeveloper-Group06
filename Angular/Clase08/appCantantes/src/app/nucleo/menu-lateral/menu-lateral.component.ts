import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SeguridadService } from '../../servicios/seguridad.service';

@Component({
	selector: 'app-menu-lateral',
	templateUrl: './menu-lateral.component.html',
	styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

	@Output() onCerrarMenu = new EventEmitter()

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {
	}

	cerrarMenu() {
		this.onCerrarMenu.emit()
	}

	cerrarSesion() {
		this.seguridadService.logout()
	}

}
