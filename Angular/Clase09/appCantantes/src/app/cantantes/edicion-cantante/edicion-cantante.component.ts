import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Cantante } from 'src/app/modelos/cantante';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
	selector: 'app-edicion-cantante',
	templateUrl: './edicion-cantante.component.html',
	styleUrls: ['./edicion-cantante.component.css']
})
export class EdicionCantanteComponent implements OnInit {
	titulo: string = ""
	cantante: Cantante
	grupoForm: FormGroup

	constructor( @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialogRef<EdicionCantanteComponent>, private formBuilder: FormBuilder) { }

	ngOnInit() {
		if (this.data.accion == "nuevo") {
			this.titulo = "Nuevo"
			this.cantante = {}
		} else {
			this.titulo = "Edición"
			this.cantante = this.data.cantante
		}

		this.grupoForm = this.crearFormulario()
	}

	crearFormulario(): FormGroup {
		return this.formBuilder.group({
			_id: [this.cantante._id],
			nombre: [this.cantante.nombre, Validators.required]
		})
	}

}
