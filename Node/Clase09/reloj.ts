import { EventEmitter } from "events"

export class Reloj extends EventEmitter {
	constructor() {
		super()
	}

	sincronizar() {
		setInterval(() => {
			const fecha = new Date()
			this.emit("generador Fecha y Hora", fecha)
		}, 1000)
	}
}