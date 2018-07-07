import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../usuario';

@Component({
	selector: 'app-datos-usuario',
	templateUrl: './datos-usuario.component.html',
	styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
	visible: boolean = false
	veces: Array<string> = []

	usuario: IUsuario = {}
	constructor() { }

	ngOnInit() {
		this.usuario["correo"] = "correo@midominio.com"
	}

	toggle() {
		this.visible = !this.visible
		this.veces.push("")
	}

	color(pos): string {
		if (pos >= 7) {
			if (pos % 2 == 0) {
				return "yellow"
			} else {
				return "orange"
			}
		} else {
			return ""
		}
	}

}
