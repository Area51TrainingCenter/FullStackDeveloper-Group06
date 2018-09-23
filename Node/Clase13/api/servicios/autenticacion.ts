import { Request, Response, NextFunction } from "express";
import { validarAccessToken } from "./tokes";

const autenticacion = (req: Request, res: Response, next: NextFunction) => {
	if(req.headers.authorization) {
		const partes: string[] = req.headers.authorization.split(' ')
		if(partes[0]=='bearer' && partes.length>0) {
			validarAccessToken(partes[1])
				.then(
					(respuesta:any) => {
						if(respuesta.estado) {
							res
								.status(respuesta.estado)
								.json(respuesta)
						} else {
							const _id = respuesta._id
							res.locals._id = _id
							next()
						}
					}
				)
				.catch(error => {
					res.send(error)
				})
		} else {
			res.status(409).json({estado: 409, mensaje: 'usuario no logueado'})	
		}
	} else {
		res.status(409).json({estado: 409, mensaje: 'usuario no logueado'})
	}
}

export {autenticacion}