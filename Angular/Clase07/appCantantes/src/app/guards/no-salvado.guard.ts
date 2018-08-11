import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

interface verificarDatos {
	datosNoSalvados: () => boolean
}

@Injectable({
	providedIn: 'root'
})
export class NoSalvadoGuard implements CanDeactivate<verificarDatos> {

	canDeactivate(componente: verificarDatos): boolean {
		const dataNoSalvada = componente.datosNoSalvados()

		if (dataNoSalvada) {
			if (confirm("Hay datos sin salvar, ¿los quieres salvar?")) {
				return false
			}
			return true
		}

		return true
	}

}
