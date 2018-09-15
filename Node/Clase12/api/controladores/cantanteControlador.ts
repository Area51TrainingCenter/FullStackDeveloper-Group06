import { Request, Response, NextFunction } from "express"
import ControladorBase from "./controladorBase"
//import Cantante from "../modelos/cantantes"
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const Cantante = mongoose.model("Cantante")
//require("../modelos/cantante")

class ControladorCantante extends ControladorBase {
	constructor() {
		super(Cantante)
	}

	async listadoPaginado(req: Request, res: Response) {
		const pagina = +req.params.pagina
		const cantidadRegistros = await Cantante.countDocuments()

		const registros = await Cantante.listaPaginada(pagina)

		res.json({
			estado: 200, mensaje: "Listado Paginado", resultados: {
				cantidad: cantidadRegistros,
				registros: registros
			}
		})
	}
}

export default ControladorCantante

/*const controlador = {
	async listar(req: Request, res: Response) {
		const registros = await Cantante.find()

		res.json({ estado: 200, mensaje: "Listado de cantantes", resultados: registros })

		//Cantante.find()
		//	.then(registros => res.json(registros))
		//	.catch(error => res.send(error)) 
	},
	async detallar(req: Request, res: Response) {
		const _id = req.params._id
		const registro = await Cantante.findOne({ _id })

		res.json({ estado: 200, mensaje: "Detalle cantante", resultados: registro })
	},
	async insertar(req: Request, res: Response) {
		const datos = req.body

		const registro = new Cantante(datos)
		await registro.save()

		res.json({ estado: 200, mensaje: "Registro insertado", resultados: registro })
	},
	async modificar(req: Request, res: Response) {
		const _id = req.params._id
		const datos = req.body

		const registro = await Cantante.findOneAndUpdate({ _id }, datos)

		res.json({ estado: 200, mensaje: "Registro actualizado", resultados: registro })
	},
	async eliminar(req: Request, res: Response) {
		const _id = req.params._id

		const registro = await Cantante.findOneAndRemove({ _id })

		res.json({ estado: 200, mensaje: "Registro eliminado", resultados: registro })
	}
}

export { controlador }*/