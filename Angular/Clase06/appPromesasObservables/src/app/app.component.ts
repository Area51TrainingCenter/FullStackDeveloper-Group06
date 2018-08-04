import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagenGato: Promise<{}>
	nombre: Promise<string>

	ngOnInit() {
		const objectoObservable: Observable<string> = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					observador.next("Llegó el inspector de Luz del Sur")
				}, 2000)

				setTimeout(() => {
					observador.next("Llegó el inspector de la municipalidad")
				}, 5000)

				setTimeout(() => {
					observador.complete()
				}, 7000)

				setTimeout(() => {
					observador.error("Se incendió la casa")
				}, 8000)

				setTimeout(() => {
					observador.next("La ventana está abierta")
				}, 10000)
			}
		)

		objectoObservable.subscribe(
			ftnNext => console.log(ftnNext),
			ftnError => console.log(ftnError),
			() => console.log("Se dejó de observar")
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
