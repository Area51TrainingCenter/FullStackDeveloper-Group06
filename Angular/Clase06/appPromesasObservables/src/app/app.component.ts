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
		const promesa: Promise<{}> = new Promise((resolve, reject) => {
			/*setTimeout(() => {
				console.log("promesa resuelta")
				resolve("Sergio")
			}, 5000)*/

			fetch("https://aws.random.cat/meow")
				.then((data) => data.json())
				.then(respuesta => resolve(respuesta))


		})

		//promesa.then((data: any) => this.nombre = data)
		//this.nombre = promesa
		this.imagenGato = promesa.then((archivo: any) => archivo.file)

		promesa.catch(error => console.log(error))

	}

}
