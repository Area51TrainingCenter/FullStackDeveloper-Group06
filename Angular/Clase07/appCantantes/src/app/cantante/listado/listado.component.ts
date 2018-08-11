import { Component, OnInit } from '@angular/core';
import { CantanteService } from '../../servicios/cantante.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { EdicionComponent } from '../edicion/edicion.component';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	columnasAMostrar: string[] = ["nombre", "botones"]

	dataSource: {}[] = []

	constructor(private cantanteService: CantanteService, private notificador: MatSnackBar, private dialogo: MatDialog) { }

	ngOnInit() {
		this.cantanteService.listar()
			.subscribe(
				data => this.dataSource = data,
				error => this.notificador.open("Ocurrió un error", null, { duration: 2000 })
			)
	}

	nuevo() {
		const popup: MatDialogRef<EdicionComponent> = this.dialogo.open(EdicionComponent, {
			data: {
				accion: "nuevo"
			},
			width: "400px"
		})

		popup.afterClosed()
			.subscribe(
				respuesta => {
					if (!respuesta) return false

					console.log(respuesta.getRawValue())
				}
			)
	}

}
