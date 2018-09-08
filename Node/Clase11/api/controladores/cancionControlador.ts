import Cancion from "../modelos/canciones"
import ControladorBase from "./controladorBase"
import mongoose = require("mongoose")

//const Cancion = mongoose.model("Cancion")

class CancionControlador extends ControladorBase {
	constructor() {
		super(Cancion)
	}
}

export default CancionControlador