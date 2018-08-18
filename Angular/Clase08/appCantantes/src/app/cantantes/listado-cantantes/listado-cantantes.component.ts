import { Component, OnInit } from '@angular/core';
import { CantantesService } from '../../servicios/cantantes.service';
import { Cantante } from '../../modelos/cantante';
import { MatDialog } from '@angular/material';
import { EdicionCantanteComponent } from '../edicion-cantante/edicion-cantante.component';

@Component({
	selector: 'app-listado-cantantes',
	templateUrl: './listado-cantantes.component.html',
	styleUrls: ['./listado-cantantes.component.css']
})
export class ListadoCantantesComponent implements OnInit {

	columnasAMostrar: Array<string> = ["botones", "nombre"]

	data: Cantante[]

	constructor(private cantantesService: CantantesService, private dialog: MatDialog) { }

	ngOnInit() {
		this.cantantesService.listar()
			.subscribe(
				(listado: Cantante[]) => this.data = listado
			)
	}

	nuevo() {
		this.dialog.open(EdicionCantanteComponent)
	}

}
