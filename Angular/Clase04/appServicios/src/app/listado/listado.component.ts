import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Iusuario } from 'src/app/iusuario';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	lista: Iusuario[]

	constructor(private usuario: UsuarioService) { }

	ngOnInit() {
		this.lista = this.usuario.listar()
	}

	editar(indice: number) {
		this.usuario.editar(indice)
	}

}
