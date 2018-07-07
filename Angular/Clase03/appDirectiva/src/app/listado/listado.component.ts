import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';
import { IUsuario } from '../usuario';
import { UsuarioService } from '../usuarios.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ListadoComponent {
	@ContentChild("titulo") titulo: ElementRef

	/*@Input() lista: Array<IUsuario>
	@Output() onBorrar = new EventEmitter<number>()*/

	lista: Array<IUsuario>
	listaOriginal: Array<IUsuario>

	suscripcion: Subscription

	constructor(private usuarioService: UsuarioService) {
		this.lista = this.usuarioService.listar()

		this.suscripcion = this.usuarioService.onInsercion.subscribe(
			(data: IUsuario[]) => this.lista = data
		)

		this.usuarioService.onEliminacion.subscribe(
			() => this.lista = this.usuarioService.listar()
		)

		console.log("Se ejecutó el constructor")
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log("Se ejecutó el ngOnChanges")
		this.listaOriginal = changes.lista.currentValue
		//console.log(changes)
	}

	ngOnInit() {
		console.log("Se ejecutó el ngOnInit")
		this.titulo.nativeElement.style.color = "green"
	}

	ngDoCheck() {
		console.log("Se ejecutó el ngDoCheck")
	}

	ngAfterContentInit() {
		console.log("Se ejecutó el ngAfterContentInit")
	}

	ngAfterContentChecked() {
		console.log("Se ejecutó el ngAfterContentChecked")
	}
	ngAfterViewInit() {
		console.log("Se ejecutó el ngAfterViewInit")
	}

	ngAfterViewChecked() {
		console.log("Se ejecutó el ngAfterViewChecked")
	}

	ngOnDestroy() {
		this.suscripcion.unsubscribe()
		console.log("Se ejecutó el ngOnDestroy")
	}


	borrarUsuario(indice: number) {
		//this.onBorrar.emit(indice)
	}

	obtenerColor(edad: number): string {
		if (edad >= 0 && edad < 20) return 'rgba(0,255,0,0.3)'
		if (edad >= 20 && edad < 60) return 'rgba(255,0,0,0.3)'
		if (edad >= 60) return 'rgba(0,0,255, .3)'
	}

	obtenerColorAleatorio(): string {
		const aleatorio = Math.random() * 10

		if (aleatorio < 5) {
			return 'brown'
		}
		else {
			return 'pink'
		}
	}

	soyViejo(edad: number): boolean {
		if (edad >= 60) return true

		return false
	}

	soyJoven(edad: number): boolean {
		if (edad <= 40) return true

		return false
	}

	filtrar(nombreABuscar: string) {
		if (nombreABuscar.trim() === "") return this.lista = this.listaOriginal


		this.lista = this.lista.filter((item: any) => {
			return item.nombreUsuario.toLowerCase().trim().indexOf(nombreABuscar.toLowerCase().trim()) >= 0
		})
	}

}
