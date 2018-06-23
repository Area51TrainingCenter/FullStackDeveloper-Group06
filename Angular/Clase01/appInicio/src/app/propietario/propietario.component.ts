import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-propietario',
	templateUrl: './propietario.component.html',
	styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {
	propietario: string = ""

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		this.propietario = ""
	}

}
