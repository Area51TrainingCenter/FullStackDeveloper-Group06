import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SeguridadService {

	onCambioEstado: Subject<boolean> = new Subject<boolean>()

	constructor(private http: HttpClient, private ruteador: Router) { }

	login(usuario: Usuario): Observable<any> {
		return this.http.post(`${environment.apiUrl}/usuario/login`, usuario)
	}

	logout() {
		localStorage.clear()
		this.ruteador.navigate(["/"])
		this.onCambioEstado.next(false)
	}

	registro(usuario: Usuario): Observable<any> {
		return this.http.post(`${environment.apiUrl}/usuario`, usuario)
	}

	estaAutenticado() {
		return localStorage.getItem("usuarioLogueado") ? true : false
	}

	obtenerDato(campo: string) {
		return JSON.parse(localStorage.getItem("usuarioLogueado"))[campo]
	}

	cabeceraAutorizacion() {
		const accessToken = this.obtenerDato("accessToken")

		const cabecera = new HttpHeaders({
			authorization: `Bearer ${accessToken}`
		})

		return cabecera
	}
}
