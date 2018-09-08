// Imports
import { Application } from "express"
import express = require("express")
import { ruteador as indexRutas } from "./rutas/indexRutas";
import { ruteador as cantanteRutas } from "./rutas/cantanteRutas"
require("dotenv").config({ path: "./variables.env" })
import { errores } from "./manejadores/errores"
import mongoose = require("mongoose")

// Declaraciones
mongoose.Promise = global.Promise
mongoose.connect(process.env.CONEXION, { useNewUrlParser: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log(error))

const app: Application = express()
app.set("PORT", process.env.PORT)

// Middlewares
app.use(express.static("./publico"))

// Rutas
app.use("/", indexRutas)
app.use("/cantante", cantanteRutas)

// Manejo de errores
app.use(errores.paginaNoEncontrada)
app.use(errores.errorGeneral)

// Servidor
app.listen(app.get("PORT"), () => console.log(`Servidor en el puerto ${app.get("PORT")}`))