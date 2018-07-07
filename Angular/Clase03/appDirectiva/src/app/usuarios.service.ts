import { IUsuario } from "./usuario";
import { EventEmitter, Injectable } from "@angular/core";
import { UtilitarioService } from "./utilitario.service";

@Injectable()
export class UsuarioService {
	lista: Array<IUsuario> = []

	onInsercion = new EventEmitter<IUsuario[]>()
	//onEliminacion = new EventEmitter<boolean>()
	onEliminacion = new EventEmitter()

	constructor(private utilitarioService: UtilitarioService) { }

	listar() {
		return this.lista.slice(0)
	}

	insertar(usuario: IUsuario) {
		usuario.nombreUsuario = this.utilitarioService.pasarAMayusculas(usuario.nombreUsuario)

		this.lista.push(usuario)
		this.onInsercion.emit(this.lista.slice(0))
	}

	eliminar(ind: number) {
		this.lista.splice(ind, 1)
		//this.onEliminacion.emit(true)
		this.onEliminacion.emit()

	}
}