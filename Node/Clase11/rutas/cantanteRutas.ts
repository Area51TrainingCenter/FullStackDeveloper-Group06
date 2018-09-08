import express = require("express")
//import { Router } from "express"
const ruteador = express.Router()
import { controlador } from "../api/controladores/cantanteControlador"
import { errores } from "../manejadores/errores"

ruteador.get("/", errores.cacheo(controlador.listar))
ruteador.get("/:_id")
ruteador.post("/")
ruteador.put("/:id")
ruteador.delete("/:id")

export { ruteador }