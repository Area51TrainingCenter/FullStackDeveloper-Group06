import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguridadService } from '../servicios/seguridad.service';
import { Usuario } from '../modelos/usuario';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	correoInicial: string = "micorreo@gmail.com"
	contrasenaInicial: string = "123"

	@ViewChild("formulario") formulario: NgForm

	constructor(private seguridadService: SeguridadService) { }

	ngOnInit() {

	}

	ngAfterViewChecked() {
		/*this.formulario.setValue({
			correo: "micorreo@correo.com",
			contrasena: "micontrasena"
		})*/
	}

	loguearse() {
		console.log(this.formulario)
		/*const usuario: Usuario = { correo: this.formulario.value.correo, contrasena: this.formulario.value.contrasena }

		this.seguridadService.login(usuario)*/
	}

}
