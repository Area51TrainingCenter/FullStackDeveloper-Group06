import mongoose = require("mongoose")
mongoose.Promise = global.Promise

const esquema = new mongoose.Schema({
	nombre: String,

	apellido: String,

	edad: Number
})

esquema.statics.listaPaginada = function (pagina: number) {
	const skip: Number = (pagina - 1) * parseInt(process.env.TAMANO_PAGINA)
	const limit = parseInt(process.env.TAMANO_PAGINA)

	return this.aggregate([
		{ $skip: skip },
		{ $limit: limit }
	])
}

const Cantante = mongoose.model("Cantante", esquema)

export default Cantante