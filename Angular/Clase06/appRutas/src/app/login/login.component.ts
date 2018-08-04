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
			correo: new FormControl(null, [Validators.required, Validators.email, this.correoGratuito.bind(this)]),
			contrasena: new FormControl(null, Validators.required)

			//  {required: true}
			//  {tipoError: boolean}
		})
	}


	loguearse() {
		const usuario: Usuario = { correo: this.formulario.value.correo, contrasena: this.formulario.value.contrasena }

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
