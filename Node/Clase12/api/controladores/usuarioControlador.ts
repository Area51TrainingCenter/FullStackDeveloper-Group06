import ControladorBase from "./controladorBase"
import Usuario from "../modelos/usuarios"
import { Request, Response } from "express"
import mongoose = require("mongoose")

//const Usuario = mongoose.model("Usuario")

class CancionControlador extends ControladorBase {
	constructor() {
		super(Usuario)
	}

	async listar(req: Request, res: Response) {
		const registros = Usuario.find({ estado: true })

		res.json({ estado: 200, mensaje: "Listado", resultados: registros })
	}

	async eliminar(req: Request, res: Response) {
		const _id = req.params._id
		const registro = Usuario.findOneAndUpdate({ _id }, { estado: false })
	}
}

export default CancionControlador