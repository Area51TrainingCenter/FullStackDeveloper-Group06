import * as http from "http"
import * as fs from "fs"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	console.log(req.method)

	if (req.url === "/" && req.method === "GET") {
		res.writeHead(200, { "content-type": "text/html" })
		const lector = fs.createReadStream("./home.html", "utf8")
		lector.pipe(res)
	} else if (req.url === "/usuario") {
		res.writeHead(200, { "content-type": "application/json" })
		const lista = [
			{ id: 1, nombre: "Pedro" },
			{ id: 2, nombre: "Marcela" }
		]
		res.end(JSON.stringify(lista))
	} else if (req.url === "/descarga/manual") {
		res.writeHead(200, { "content-type": "application/pdf" })
		const lector = fs.createReadStream("./manual.pdf")
		lector.pipe(res)
	} else {
		res.writeHead(404, { "content-type": "text/plain" })
		res.end("No existe la ruta")
	}


})

servidor.listen(4000, () => console.log("Servidor en el puerto 4000"))