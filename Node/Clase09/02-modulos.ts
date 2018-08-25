//import { saludo, curso } from "./utilitario"
import * as util from "./utilitario"
import Seguridad from "./utilitario"

const respuesta = util.saludo("Sergio")
console.log(respuesta)
console.log(util.curso)

const seguridad = new Seguridad()
console.log(seguridad.obtenerToken())

const cantidadRoles = seguridad.validarRoles("admin", "operador", "lector")
console.log(cantidadRoles)