import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-cantante',
	templateUrl: './cantante.component.html',
	styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {

	constructor(private ruteador: Router, private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
	}

	irANuevo() {
		this.ruteador.navigate(["nuevo"], { relativeTo: this.rutaActiva })
	}

}
