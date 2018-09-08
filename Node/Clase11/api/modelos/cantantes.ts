import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: String,

	apellido: String,

	edad: Number
})

const Cantante = mongoose.model("Cantante", esquema)

export default Cantante