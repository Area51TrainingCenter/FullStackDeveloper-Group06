import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: String,

	ritmo: String,

	anno: Number
})

const Cancion = mongoose.model("Cancion", esquema)

export default Cancion