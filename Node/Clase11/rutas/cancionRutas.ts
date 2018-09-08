import express = require("express")
import { errores } from "../manejadores/errores"
import CancionControlador from "../api/controladores/cancionControlador"

const controlador = new CancionControlador()
const ruteador = express.Router()

ruteador.get("/", errores.cacheo(controlador.listar))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))
ruteador.post("/", errores.cacheo(controlador.insertar))
ruteador.put("/:_id", errores.cacheo(controlador.modificar))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminar))

export { ruteador }