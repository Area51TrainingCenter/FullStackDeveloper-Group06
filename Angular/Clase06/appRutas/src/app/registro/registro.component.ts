import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../servicios/seguridad.service';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	grupoFormulario: FormGroup

	constructor(private formBuilder: FormBuilder, private seguridadService: SeguridadService) { }

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
				data => console.log(data),
				error => console.log(error)
			)
	}




}
