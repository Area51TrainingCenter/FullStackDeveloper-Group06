import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import * as fs from "fs"

const app: Application = express()

//app.use("/assets", express.static("./publico"))
app.use(express.static("./publico"))

/*app.use("/assets", (req: Request, res: Response, next: NextFunction) => {
	console.log(`${__dirname}/publico/${req.url}`)
	fs.exists(`${__dirname}/publico/${req.url}`, existe => {
		if (existe) {
			res.sendFile(`${__dirname}/publico/${req.url}`)
		} else {
			next()
		}
	})
})*/


app.get("/", (req: Request, res: Response) => {
	res.send("Todo ok")
})

app.listen(4000, () => console.log("Servidor en el puerto 4000"))