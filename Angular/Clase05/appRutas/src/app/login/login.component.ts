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
		const usuario: Usuario = { correo: "sergio@correo.com", contrasena: "123" }

		this.seguridadService.login(usuario)
	}

}
