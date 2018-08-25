const saludo = nombre => `Hola ${nombre}`

const curso: string = "FullStack"

export default class Seguridad {
	obtenerToken(): string {
		return 'akdkdkdkdk'
	}

	validarRoles(...roles) {
		console.log(roles[1])
		return roles.length
	}
}

export { saludo, curso }

//export default Seguridad

