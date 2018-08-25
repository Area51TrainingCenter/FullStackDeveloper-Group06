import * as http from "http"
import * as fs from "fs"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "text/html" })

	const lectura = fs.createReadStream("./index.html", "utf8")

	lectura.pipe(res)

	/*lectura.on("data", chunck => {
		res.write(chunck)
	})

	lectura.on("end", () => {
		res.end()
	})*/

})

servidor.listen(4000, () => console.log("Servidor ejecutándose en el puerto 4000"))