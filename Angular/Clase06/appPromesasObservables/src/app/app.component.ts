import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagenGato: Promise<{}>
	nombre: Promise<string>

	ngOnInit() {
		const promesa1 = new Promise((resolve, reject) => {
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
			.catch(error => console.log(error))

	}

}
