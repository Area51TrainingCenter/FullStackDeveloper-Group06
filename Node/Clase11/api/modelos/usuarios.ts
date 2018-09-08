import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	correo: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},

	contrasena: {
		type: String,
		required: true
	},

	estado: {
		type: Boolean,
		default: true
	}
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario