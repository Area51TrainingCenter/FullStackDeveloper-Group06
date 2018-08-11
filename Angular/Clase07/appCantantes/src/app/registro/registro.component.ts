import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../servicios/seguridad.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	grupoFormulario: FormGroup

	constructor(private formBuilder: FormBuilder, private seguridadService: SeguridadService, private notificador: MatSnackBar, private ruteador: Router) { }

	ngOnInit() {
		this.grupoFormulario = this.crearFormGroup()
	}

	crearFormGroup(): FormGroup {
		return this.formBuilder.group({
			nombreCompleto: [null, Validators.required],
			usuario: [null, Validators.required],
			contrasena: [null, Validators.required]
		})
	}

	registrar() {
		this.seguridadService.registro(this.grupoFormulario.value)
			.subscribe(
				data => {
					const notificador: MatSnackBarRef<any> = this.notificador.open("Usuario registrado", null, { duration: 2000 })

					notificador.afterDismissed()
						.subscribe(
							() => this.ruteador.navigate(["/"])
						)
				},
				error => {
					this.notificador.open("Ocurrió un error", null, {
						duration: 2000
					})
				}
			)
	}




}
