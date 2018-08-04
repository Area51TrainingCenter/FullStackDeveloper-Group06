import { Component } from '@angular/core';
import { Observable, Observer, merge } from 'rxjs';
import { switchMap, map } from "rxjs/operators"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagenGato: Promise<{}>
	nombre: Promise<string>
	paginaActual: number = 0
	ordenamientoActual: string = "nombre"
	textoBuscadoActual: string = ""
	personas: {}[] = []

	ngOnInit() {
		const paginador: Observable<number> = Observable.create(
			(observador: Observer<number>) => {
				setTimeout(() => {
					this.paginaActual = 2
					observador.next(2)
				}, 2000)
			}
		)

		const ordenador: Observable<string> = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					this.ordenamientoActual = "nombre"
					observador.next("nombre")
				}, 4000)
			}
		)

		const buscador: Observable<string> = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					this.textoBuscadoActual = "hidalgo"
					observador.next("hidalgo")
				}, 3000)
			}
		)

		merge(paginador, ordenador, buscador)
			.pipe(
				switchMap(() => {
					const http: Observable<any> = Observable.create(
						(observador: Observer<any>) => {
							setTimeout(() => {
								observador.next([
									{ nombre: "Sergio", apellido: "Hidalgo" },
									{ nombre: "Andrea", apellido: "Hidalgo" },
									{ nombre: "Mónica", apellido: "Véliz" }
								])
							}, 5000)
						}
					)

					return http
				}),
				map((valor: any[]) => {
					const nuevoArreglo = valor.map(item => {
						delete item.apellido
						return item
					})
					return nuevoArreglo
				}),
				map((valor: any[]) => {
					const nuevoArreglo = valor.map(item => {
						item.nombre = item.nombre.toUpperCase()
						return item
					})
					return nuevoArreglo
				})
			)
			.subscribe(
				(data) => {
					console.log(data)
					console.log(`El usuario va la página '${this.paginaActual}, está ordenando por el campo '${this.ordenamientoActual}' y está buscando '${this.textoBuscadoActual}'. Hay que llamar nuevamente al api rest`)
					this.personas = data
				}
			)







		/*const promesa1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([2018, 2014, 2010])
			}, 4000)
		})

		const promesa2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(["Forlán", "Suarez", "Cavanni"])
			}, 6000)
		})

		Promise.all([promesa1, promesa2])
			.then(data => {
				console.log(data[0])
				console.log(data[1])
				console.log("Trabajo concluido")
			})
			.catch(error => console.log(error))*/

	}

}
