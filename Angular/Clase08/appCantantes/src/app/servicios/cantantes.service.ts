import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cantante } from '../modelos/cantante';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable({
	providedIn: 'root'
})
export class CantantesService {

	constructor(private http: HttpClient, private seguridadService: SeguridadService) { }

	listar(): Observable<Cantante[]> {
		const cabecera = this.seguridadService.cabeceraAutorizacion()
		return this.http.get<Cantante[]>(`${environment.apiUrl}/cantante`, { headers: cabecera })
	}

}
