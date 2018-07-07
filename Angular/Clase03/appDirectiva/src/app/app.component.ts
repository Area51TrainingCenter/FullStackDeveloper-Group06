import { Component } from '@angular/core';
import { IUsuario } from './usuario';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// listaUsuarios: string[]
	listaUsuarios: Array<IUsuario> = []

	/*agregar(nombreUsuario: string) {
		this.listaUsuarios.push(nombreUsuario)
		console.log(this.listaUsuarios)
	}*/

	agregar(usuario: IUsuario) {
		this.listaUsuarios.push(usuario)
		this.listaUsuarios = this.listaUsuarios.slice(0)
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
