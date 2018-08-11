import { Injectable } from '@angular/core';
import { ICantante } from '../modelos/cantante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CantanteService {

	constructor(private http: HttpClient) { }

	listar(): Observable<ICantante[]> {
		const usuarioLogueado: any = JSON.parse(localStorage.getItem("usuarioLogueado"))

		const cabecera: HttpHeaders = new HttpHeaders({
			"authorization": `Bearer ${usuarioLogueado.accessToken}`
		})

		return this.http.get<ICantante[]>("http://localhost:4002/cantante", { headers: cabecera })
			.pipe(
				pluck("resultado")
			)
	}
}
