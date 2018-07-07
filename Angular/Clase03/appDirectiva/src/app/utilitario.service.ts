import { Injectable } from '@angular/core';

@Injectable()
export class UtilitarioService {

	constructor() { }

	pasarAMayusculas(cadena: string): string {
		return cadena.toUpperCase()
	}

}
