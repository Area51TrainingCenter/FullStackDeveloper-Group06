import { Request, Response, NextFunction, Application } from "express"
import express = require("express")

const app: Application = express()

//Supongamos que valida el token
app.use("/", (req: Request, res: Response, next: NextFunction) => {
	let tokenValidez: boolean = false

	if (!req.headers.authorization) {
		tokenValidez = false
	} else {
		const token = req.headers.authorization.split(" ")[1]
		if (token == "123") {
			res.locals.nombreUsuario = "Sergio"
			tokenValidez = true
		} else {
			tokenValidez = false
		}
	}


	if (tokenValidez) {
		next()
	} else {
		res.status(500).send("Usted no está logueado")
	}
})

//Supongamos que valida el tipo de archivo enviado
app.use("/", (req: Request, res: Response, next: NextFunction) => {
	const extensionValida: boolean = true

	if (!extensionValida) {
		res.status(500).send("El archivo debe ser una imagen")
	} else {
		next()
	}
})

//Supongamos que cambia el tamaño a la imagen
app.use("/", (req: Request, res: Response, next: NextFunction) => {
	next()
})

app.get("/", (req: Request, res: Response) => {
	//res.sendFile(`${__dirname}/home.html`)
	res.send(res.locals.nombreUsuario)
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