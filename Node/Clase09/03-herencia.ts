import { Reloj } from "./reloj"

const reloj = new Reloj()
reloj.sincronizar()

reloj.on("generador Fecha y Hora", data => console.log(data))