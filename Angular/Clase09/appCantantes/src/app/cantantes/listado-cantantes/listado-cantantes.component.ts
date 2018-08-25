import { Component, OnInit } from '@angular/core';
import { CantantesService } from '../../servicios/cantantes.service';
import { Cantante } from '../../modelos/cantante';
import { MatDialog, MatDialogRef, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { EdicionCantanteComponent } from '../edicion-cantante/edicion-cantante.component';
import { pluck } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-listado-cantantes',
	templateUrl: './listado-cantantes.component.html',
	styleUrls: ['./listado-cantantes.component.css']
})
export class ListadoCantantesComponent implements OnInit {

	columnasAMostrar: Array<string> = ["botones", "nombre"]

	observadorListar: Subject<any> = new Subject<any>()
	observadorInsertar: Subject<number> = new Subject<number>()

	pagina: number = 1

	data: Cantante[] = []

	constructor(private cantantesService: CantantesService, private dialog: MatDialog, private notificador: MatSnackBar) { }

	ngOnInit() {
		merge(this.observadorListar, this.observadorInsertar)
			.pipe(
			switchMap((resp) => {
				console.log(resp)
				return this.cantantesService.listar()
			}),
			pluck("resultado")
			)
			.subscribe(
			//(respuesta: any) => this.data = respuesta.resultado
			(listado: Cantante[]) => this.data = listado
			)

		this.observadorListar.next()
	}


	nuevo() {
		const ref: MatDialogRef<EdicionCantanteComponent> = this.dialog.open(EdicionCantanteComponent, {
			disableClose: true,
			width: "400px",
			data: {
				accion: "nuevo"
			}
		})

		ref.afterClosed()
			.subscribe(
			(respuesta: FormGroup) => {
				if (!respuesta) return false

				const dataAEnviar: Cantante = respuesta.getRawValue()

				this.cantantesService.insertar(dataAEnviar)
					.subscribe(
					respuesta => {
						const ref: MatSnackBarRef<SimpleSnackBar> = this.notificador.open("Cantante registrado", null, {
							duration: 2000
						})

						ref.afterDismissed()
							.subscribe(
							respuesta => this.observadorInsertar.next(3)
							)

						//this.observador.next()
					}
					)


			}
			)
	}

	editar() {
		this.dialog.open(EdicionCantanteComponent, {
			disableClose: true,
			width: "400px",
			data: {
				accion: "edicion",
				cantante: {}
			}
		})
	}

}
