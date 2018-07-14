import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cantante-edicion',
	templateUrl: './cantante-edicion.component.html',
	styleUrls: ['./cantante-edicion.component.css']
})
export class CantanteEdicionComponent implements OnInit {
	id: number
	suscripcion: Subscription

	constructor(private rutaActiva: ActivatedRoute, private ruteador: Router) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.params["id"] // {id: 20}

		this.suscripcion = this.rutaActiva.params
			.subscribe(
			(parametros: Params) => {
				this.id = parametros.id
			}
			)
	}

	ir() {
		this.ruteador.navigate(["/cantante", "nuevo"],
			{
				queryParams: { titulo: "Nuevo título", anno: 2020 },
				fragment: "Dios"
			}
		)
	}

	ngOnDestroy() {
		this.suscripcion.unsubscribe()
	}

}
