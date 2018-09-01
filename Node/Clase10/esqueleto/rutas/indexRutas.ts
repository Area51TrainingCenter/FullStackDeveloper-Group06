import { Request, Response, NextFunction } from "express"
import { controlador as IndexControlador } from "../api/controladores/indexControlador"
import express = require("express")

const ruteador = express.Router()

ruteador.get("/", IndexControlador.home)

ruteador.post("/registrar", IndexControlador.registrar)

ruteador.post("/login", IndexControlador.login)

export { ruteador }
