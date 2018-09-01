import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const errores = {
	paginaNoEncontrada(req: Request, res: Response, next: NextFunction) {
		const error: IError = new Error("Página no encontrada")
		error.status = 404

		next(error)
	},

	errorGeneral(error: IError, req: Request, res: Response, next: NextFunction) {
		if (process.env.ENTORNO == "development") {
			res.json({
				status: error.status,
				mensaje: error.message,
				pila: error.stack
			})
		} else {
			res.json({
				status: error.status,
				mensaje: error.message
			})
		}
	}
}

export { errores }