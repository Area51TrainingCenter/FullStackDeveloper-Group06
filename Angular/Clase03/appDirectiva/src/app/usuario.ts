export class Usuario {
	nombreUsuario: string
	edad: number
	estado: string

	constructor(_nombreUsuario: string, _edad: number, _estado: string) {
		this.nombreUsuario = _nombreUsuario
		this.edad = _edad
		this.estado = _estado
	}

	descripcion() {
		return `El usuario llamado ${this.nombreUsuario} tiene ${this.edad} años y es ${this.estado}`
	}
}