import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CantanteService } from "./cantante.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	grupo: FormGroup

	constructor(private servicio: CantanteService) {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required),
			edad: new FormControl(null, Validators.required),
			foto: new FormControl(null)
		})
	}

	grabar() {
		this.servicio.insertar(this.grupo.getRawValue())
	}

	archivoSeleccionado(archivo) {
		this.grupo.patchValue({ foto: archivo.target.files[0] })
		console.log(this.grupo)
	}

}
