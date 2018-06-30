import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// listaUsuarios: string[]
	listaUsuarios: Array<string> = []

	agregar(nombreUsuario: string) {
		this.listaUsuarios.push(nombreUsuario)
		console.log(this.listaUsuarios)
	}

	obteniendoNombreUsuario(evento) {
		//this.usuario = evento.target.value
		//console.log(usuario)
	}

	borrarUsuario(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.listaUsuarios.splice(indice, 1)
		}
	}

	/*borrarUsuario(nombre: string) {
		if (confirm("¿Está seguro?")) {
			const posicion = this.listaUsuarios.indexOf(nombre)
			this.listaUsuarios.splice(posicion, 1)
		}
	}*/
}
