import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CantanteService {

	constructor(private http: HttpClient) { }

	insertar(datos: {}) {
		const fd = new FormData()
		fd.append("nombre", datos["nombre"])
		fd.append("apellido", datos["apellido"])
		fd.append("edad", datos["edad"])

		if (!datos["foto"]) fd.append("foto", datos["foto"])

		this.http.post("http://localhost:4000/cantante", fd)
			.subscribe(
			respuesta => console.log(respuesta),
			error => console.log(error)
			)
	}

}
