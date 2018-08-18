import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SeguridadService } from '../../servicios/seguridad.service';
import { Usuario } from '../../modelos/usuario';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { pluck } from 'rxjs/operators'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupo: FormGroup

	constructor(private seguridadService: SeguridadService, private ruteador: Router, private notificador: MatSnackBar) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			usuario: new FormControl(null, Validators.required),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	ingresar() {
		/*const usuario: Usuario = {
			usuario: this.grupo.value.usuario,
			contrasena: this.grupo.value.contrasena
		}*/

		this.seguridadService.login(this.grupo.getRawValue())
			.pipe(
				pluck("resultado")
			)
			.subscribe(
				(respuesta) => {
					this.seguridadService.onCambioEstado.next(true)
					const usuarioLogueado = respuesta

					localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))

					this.ruteador.navigate(["/cantante"])
				},
				() => {
					this.seguridadService.onCambioEstado.next(false)
					this.notificador.open("Usuario inválido", null, {
						duration: 2000
					})
				}
			)
	}

}
