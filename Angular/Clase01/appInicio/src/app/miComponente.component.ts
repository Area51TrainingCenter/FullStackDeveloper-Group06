import { Component } from "@angular/core";

@Component({
	selector: "[app-micomponente]",
	templateUrl: "miComponente.component.html",
	styleUrls: ["miComponente.component.css"]
})
export class AppMiComponente {
	nombre: string = "FullStack"
	activo: boolean = false

	nombreCurso: string

	//cursos: Array<string>
	cursos: string[] = []


	constructor() {
		//var self = this
		setTimeout(() => this.activo = false, 3000)
	}

	nombreCompleto() {
		return "FullStack en Javascript"
	}

	textoIngresado(evento: any) {
		const elemento: HTMLInputElement = <HTMLInputElement>evento.target
		//this.nombreCurso = elemento.value
		/*console.log(elemento.value)
		console.log((<HTMLInputElement>evento.target).value)*/
	}

	agregarCurso() {
		this.cursos.push(this.nombreCurso)
		this.nombreCurso = ""
		console.log(this.cursos)
	}

	descripcion() {
		/*
			var
			const
			let
		*/
		return `Descripción de ${this.nombre}: Curso de FullStack en JS`
	}

	cambiarEstado() {
		this.activo = !this.activo
	}

	eliminar(indice: number): void {
		if (confirm("Quieres realmente eliminar?")) {
			//const indice = this.cursos.indexOf(cursoNombre)
			this.cursos.splice(indice, 1)
		}

	}
}