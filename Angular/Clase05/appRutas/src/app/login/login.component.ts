import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../servicios/seguridad.service';
import { Usuario } from '../modelos/usuario';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {
	}

	loguearse() {
		const usuario: Usuario = { correo: "andrea@correo.com", contrasena: "456" }

		this.seguridadService.login(usuario)
	}

}
