import * as fs from "fs"

//const texto = fs.readFileSync("./lectura.txt", { encoding: "utf8" })

let texto

fs.readFile("./lectura.txt", "utf8", (err, data) => {
	if (err) return console.log(err)

	texto = data
	console.log(texto)
})

//console.log(texto)