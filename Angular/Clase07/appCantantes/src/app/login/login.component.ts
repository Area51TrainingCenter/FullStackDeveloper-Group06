import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguridadService } from '../servicios/seguridad.service';
import { Usuario } from '../modelos/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	correoInicial: string = "micorreo@gmail.com"
	contrasenaInicial: string = "123"

	listaCorreosGratuitos = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com']

	formulario: FormGroup

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {
		this.formulario = new FormGroup({
			usuario: new FormControl(null, Validators.required),
			contrasena: new FormControl(null, Validators.required)
		})
	}


	loguearse() {
		const usuario: Usuario = { usuario: this.formulario.value.usuario, contrasena: this.formulario.value.contrasena }

		this.seguridadService.login(usuario)
	}

	correoGratuito(form: FormControl): { [s: string]: boolean } {
		if (form.value) {
			let dominioCorreo = form.value.split("@")[1]

			if (dominioCorreo) {
				dominioCorreo = dominioCorreo.toLowerCase()

				const encontrado: number = this.listaCorreosGratuitos.findIndex(correo => correo === dominioCorreo)

				if (encontrado > -1) {
					return { "correoGratuito": true }
				} else {
					return null
				}
			}

		}
		return null
	}

}
