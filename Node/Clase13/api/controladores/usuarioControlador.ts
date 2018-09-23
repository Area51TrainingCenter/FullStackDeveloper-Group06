import ControladorBase from "./controladorBase"
import Usuario from "../modelos/usuarios"
import { Request, Response } from "express"
import mongoose = require("mongoose")
import { crearAccessToken, crearRefreshToken } from "../servicios/tokes";

//const Usuario = mongoose.model("Usuario")

class CancionControlador extends ControladorBase {
	constructor() {
		super(Usuario)
	}

	async insertar(req: Request, res: Response) {
		const datos:any = req.body
		datos.estado = true
		datos.refreshToken = crearRefreshToken()

		const usuario = new Usuario(datos)
		await usuario.save()

		res.json({estado: 200, mensaje: "usuario creado"})
	}

	async listar(req: Request, res: Response) {
		const registros = await Usuario.find({ estado: true })


		res.json({ estado: 200, mensaje: "Listado", resultados: registros })
	}

	async eliminar(req: Request, res: Response) {
		const _id = req.params._id
		const registro = await Usuario.findOneAndUpdate({ _id }, { estado: false })

		res.json({estado: 200, mensaje: "usuario eliminado"})
	}

	async login(req: Request, res: Response) {
		const datos = req.body
		datos.estado= true

		const usuario: any = await Usuario.findOne(datos)

		if(usuario) {
			console.log(usuario)
			const accessToken = crearAccessToken(usuario._id)
			const refreshToken = usuario.refreshToken

			console.log(refreshToken)

			res.json({
				estado: 200, mensaje: "usuario logueado2", resultados: {
					accessToken, refreshToken
				}
			})
		} else {
			res.json({
				estado: 404, mensaje: "usuario no valido"
			})
		}
	}

	async generarNuevoAccessToken(req: Request, res: Response) {
		const refreshToken = req.body.refreshToken

		const usuario = await Usuario.findOne({refreshToken})

		if(usuario) {
			const nuevoAccessToken = crearAccessToken(usuario._id)

			res.json({estado: 200, mensaje: 'nuevo access token', resultados: nuevoAccessToken})
		} else {
			res.status(404).json({estado: 200, mensaje: 'usuario no encontrado'})
		}

	}
}

export default CancionControlador