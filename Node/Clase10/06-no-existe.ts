import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import * as fs from "fs"

const app: Application = express()

app.use(express.static("./publico"))

app.get("/", (req: Request, res: Response) => {
	res.send("Todo ok")
})

app.use((req: Request, res: Response) => {
	res.send("No existe la ruta")
})

app.listen(4000, () => console.log("Servidor en el puerto 4000"))