import express = require("express")
import UsuarioControlador from "../api/controladores/usuarioControlador"
import { errores } from "../manejadores/errores"

const ruteador = express.Router()
const controlador = new UsuarioControlador()

ruteador.get("/", errores.cacheo(controlador.listar))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))
ruteador.post("/", errores.cacheo(controlador.insertar))
ruteador.put("/:_id", errores.cacheo(controlador.modificar))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminar))
ruteador.post("/login", errores.cacheo(controlador.login))
ruteador.post('/nuevoAccessToken', errores.cacheo(controlador.generarNuevoAccessToken))

export { ruteador }