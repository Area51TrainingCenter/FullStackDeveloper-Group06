import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cantante-nuevo',
	templateUrl: './cantante-nuevo.component.html',
	styleUrls: ['./cantante-nuevo.component.css']
})
export class CantanteNuevoComponent implements OnInit {

	titulo: string
	anno: number

	nivel: string

	constructor(private rutaActiva: ActivatedRoute, private ruteador: Router) { }

	ngOnInit() {
		this.titulo = this.rutaActiva.snapshot.queryParams.titulo
		this.anno = +this.rutaActiva.snapshot.queryParams.anno

		this.nivel = this.rutaActiva.snapshot.fragment
	}

	irAOtro() {
		this.ruteador.navigate(["cantante", "nuevo"],
			{
				queryParams: { mes: "abril" },
				queryParamsHandling: "merge"
			}
		)
	}

}
