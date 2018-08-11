import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ICantante } from '../../modelos/cantante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface verificarDatos {
	datosNoSalvados: () => boolean
}

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, verificarDatos {
	titulo: string = ""
	cantante: ICantante

	grupo: FormGroup



	constructor(@Inject(MAT_DIALOG_DATA) private datos, private formBuilder: FormBuilder, private dialogoRef: MatDialogRef<EdicionComponent>) { }

	ngOnInit() {
		if (this.datos.accion == "nuevo") {
			this.titulo = "Nuevo"
			this.cantante = {}
		} else {
			this.titulo = "Edición"
			this.cantante = this.datos.cantante
		}

		this.grupo = this.crearFormulario()
	}

	crearFormulario(): FormGroup {
		return this.formBuilder.group({
			nombre: [this.cantante.nombre, Validators.required]
		})
	}


	datosNoSalvados(): boolean {
		return true
	}

}
