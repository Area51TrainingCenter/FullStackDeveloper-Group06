const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const esquema = new mongoose.Schema({
	titulo: String,

	ritmo: String,

	anno: Number,

	cantante: {
		type: mongoose.Schema.ObjectId,
		ref: "Cantante",
		required: true
	}
})

esquema.statics.listaPaginada = function (pagina: number) {
	const skip: Number = (pagina - 1) * parseInt(process.env.TAMANO_PAGINA)
	const limit = parseInt(process.env.TAMANO_PAGINA)

	return this.aggregate([
		{ $skip: skip },
		{ $limit: limit },
		{ $lookup: { from: "cantantes", localField: "cantante", foreignField: "_id", as: "cantante" } }
	])
}

const Cancion = mongoose.model("Cancion", esquema)

export default Cancion