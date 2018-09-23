import { Request, Response } from "express"
import ControladorBase from "./controladorBase"
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Cancion = mongoose.model("Cancion")

class CancionControlador extends ControladorBase {
	constructor() {
		super(Cancion)
	}

	async listadoPaginado(req: Request, res: Response) {
		const pagina = +req.params.pagina
		const cantidadRegistros = await Cancion.countDocuments()

		const registros = await Cancion.listaPaginada(pagina)

		res.json({
			estado: 200, mensaje: "Listado Paginado", resultados: {
				cantidad: cantidadRegistros,
				registros: registros
			}
		})
	}
}

export default CancionControlador