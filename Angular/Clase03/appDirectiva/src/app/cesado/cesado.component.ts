import { Component, OnInit, Input } from '@angular/core';
import { IPersonal } from '../ipersonal';

@Component({
	selector: 'app-cesado',
	templateUrl: './cesado.component.html',
	styleUrls: ['./cesado.component.css']
})
export class CesadoComponent implements OnInit {
	@Input() lista: IPersonal[]
	constructor() { }

	ngOnInit() {
	}

}
