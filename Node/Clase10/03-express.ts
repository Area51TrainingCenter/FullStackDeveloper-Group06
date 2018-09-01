import { Request, Response, NextFunction, Application } from "express"
import express = require("express")

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
	res.sendFile(`${__dirname}/home.html`)
})

app.post("/usuario", (req: Request, res: Response) => {
	const lista = [
		{ id: 1, nombre: "Pedro" },
		{ id: 2, nombre: "Fernanda" }
	]

	//res.status(200).type("application/json").send(JSON.stringify(lista))
	//res.status(200).json(lista)
	res.json(lista)
})

app.listen(4000, () => console.log("Servidor en el puerto 4000"))