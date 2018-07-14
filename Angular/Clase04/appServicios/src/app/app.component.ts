import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	editando: boolean = false
	constructor(private usuario: UsuarioService) { }

	ngOnInit() {
		this.usuario.onEdicion
			.subscribe(
			() => this.editando = true
			)
	}
}
