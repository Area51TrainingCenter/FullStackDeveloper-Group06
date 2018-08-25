import * as fs from "fs"

const lectura = fs.createReadStream("./lectura.txt", "utf8")
const escritura = fs.createWriteStream("./escritura.txt")

lectura.on("data", chunck => {
	console.log("pedazo")
	escritura.write(chunck)
})