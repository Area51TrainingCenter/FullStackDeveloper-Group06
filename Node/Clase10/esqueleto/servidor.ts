// Imports
import { Application } from "express"
import express = require("express")
import { ruteador as indexRutas } from "./rutas/indexRutas";
require("dotenv").config({ path: "./variables.env" })
import { errores } from "./manejadores/errores"

// Declaraciones
const app: Application = express()
app.set("PORT", process.env.PORT)

// Middlewares
app.use(express.static("./publico"))

// Rutas
app.use("/", indexRutas)

// Manejo de errores
app.use(errores.paginaNoEncontrada)
app.use(errores.errorGeneral)





// Servidor
app.listen(app.get("PORT"), () => console.log(`Servidor en el puerto ${app.get("PORT")}`))