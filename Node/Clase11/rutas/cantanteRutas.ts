import express = require("express")
//import { Router } from "express"
const ruteador = express.Router()
//import { controlador } from "../api/controladores/cantanteControlador"
import ControladorCantante from "../api/controladores/cantanteControlador"
import { errores } from "../manejadores/errores"

const controlador = new ControladorCantante()

ruteador.get("/", errores.cacheo(controlador.listar))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))
ruteador.post("/", errores.cacheo(controlador.insertar))
ruteador.put("/:_id", errores.cacheo(controlador.modificar))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminar))

export { ruteador }