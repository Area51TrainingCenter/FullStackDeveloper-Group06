import { Request, Response } from "express"

class ControladorBase {
	modelo: any

	constructor(modelo) {
		this.modelo = modelo
		this.listar = this.listar.bind(this)
		this.detallar = this.detallar.bind(this)
		this.insertar = this.insertar.bind(this)
		this.modificar = this.modificar.bind(this)
		this.eliminar = this.eliminar.bind(this)
	}

	async listar(req: Request, res: Response) {
		const registros = await this.modelo.find()

		res.json({ estado: 200, mensaje: "Listado", resultados: registros })
	}

	async detallar(req: Request, res: Response) {
		const _id = req.params._id
		const registro = await this.modelo.findOne({ _id })

		res.json({ estado: 200, mensaje: "Detalle", resultados: registro })
	}

	async insertar(req: Request, res: Response) {
		const datos = req.body

		const registro = new this.modelo(datos)
		await registro.save()

		res.json({ estado: 200, mensaje: "Registro insertado", resultados: registro })
	}

	async modificar(req: Request, res: Response) {
		const _id = req.params._id
		const datos = req.body

		const registro = await this.modelo.findOneAndUpdate({ _id }, datos)

		res.json({ estado: 200, mensaje: "Registro actualizado", resultados: registro })
	}

	async eliminar(req: Request, res: Response) {
		const _id = req.params._id

		const registro = await this.modelo.findOneAndRemove({ _id })

		res.json({ estado: 200, mensaje: "Registro eliminado", resultados: registro })
	}
}

export default ControladorBase