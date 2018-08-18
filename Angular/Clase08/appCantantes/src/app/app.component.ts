import { Component } from '@angular/core';
import { SeguridadService } from './servicios/seguridad.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	estadoUsuario: boolean = false

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {
		this.estadoUsuario = this.seguridadService.estaAutenticado()

		this.seguridadService.onCambioEstado
			.subscribe(
				estado => this.estadoUsuario = estado
			)
	}
}
