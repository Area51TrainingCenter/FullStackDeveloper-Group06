import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagenGato: string

	ngOnInit() {
		console.log("antes de la promesa")
		const promesa = new Promise((resolve, reject) => {

			const gato = fetch("https://aws.random.cat/meow")
			gato.then(
				data => {
					return data.json()
				},
				error => console.log(error)
			)
				.then(gato => resolve(gato), error => console.log(error))
			//.catch(error => console.log(error))

			/*setTimeout(() => {
				resolve([
					{ nombre: "Santana" },
					{ nombre: "Gabriel Romero" },
					{ nombre: "Sting" }
				])
			}, 3000)*/

			/*setTimeout(() => {
				reject({ estado: 409, mensaje: "No está autorizado" })
			}, 3000)*/
		})

		promesa.then((data: any) => {
			this.imagenGato = data.file
			console.log(data)
			//console.log("Se cumplió la promesa") 
		})

		promesa.catch(error => console.log(error))

		console.log("después de la promesa")
	}

}
