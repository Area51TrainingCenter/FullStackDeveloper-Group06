import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUsuario } from '../usuario';
import { UsuarioService } from '../usuarios.service';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	@Input() item: IUsuario
	@Input() indice: number


	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
	}

	eliminar() {
		this.usuarioService.eliminar(this.indice)
	}

	ngOnDestroy() {
		console.log("Se ejecutó el ngOnDestroy")
	}

}
