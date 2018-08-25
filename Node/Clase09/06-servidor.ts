import * as http from "http"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "text/plain" })
	res.write("Hola")
	res.write("Soy Sergio")
	res.write("¿cómo estás?")
	res.end("Me tengo que ir, sorry")
})

servidor.listen(4000, () => console.log("Servidor ejecutándose en el puerto 4000"))