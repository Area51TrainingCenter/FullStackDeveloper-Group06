import { Injectable } from '@angular/core';
import { IUsuario } from './usuario.interface'
import { HttpClient } from '@angular/common/http'
import { pluck } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  login(usuario:IUsuario){
    console.log("login servicio")
    this.http.post('http://localhost:4000/usuario/login', usuario)
      .pipe(
        pluck('resultados')
      )
      .subscribe(
        (data:any) => {
          localStorage.setItem('usuarioLogueado', JSON.stringify(data))
        }
      )
  }

  solicitarNuevoAccessToken(): Observable<any> {
    const data = JSON.parse(localStorage.getItem('usuarioLogueado'))

    return this.http.post('http://localhost:4000', {refreshToken: data.refreshToken})
  }
}
