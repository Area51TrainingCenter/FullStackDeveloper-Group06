import { Component, OnInit } from '@angular/core';
import { Iusuario } from 'src/app/iusuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
	usuario: Iusuario = {}

	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
		this.usuarioService.onEdicion
			.subscribe(
			(data: Iusuario) => this.usuario = data
			)
	}

	grabar() {
		this.usuarioService.grabar(this.usuario)
		this.usuario = {}
	}

	cancelar() {
		this.usuario = {}
	}

}
