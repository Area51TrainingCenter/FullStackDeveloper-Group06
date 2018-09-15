import { Request, Response } from "express"
const controlador = {
	home(req: Request, res: Response) {
		res.send("Todo ok")
	},
	registrar(req: Request, res: Response) {
		res.send("Registrado")
	},
	login(req: Request, res: Response) {
		res.send("Logueado")
	}
}

export { controlador }