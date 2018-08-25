import { controlador } from "../api/controladores/cancionControlador";
import { autenticado } from "../api/politicas/autenticadoPolitica";
import { erroresManejador } from "../manejadores/errores";

import express = require("express");

const ruteador = express.Router();

ruteador.get(
  "/:cantante",
  autenticado,
  erroresManejador.catch(controlador.listar)
);
ruteador.get("/:id", autenticado, erroresManejador.catch(controlador.detallar));
ruteador.post("/", autenticado, erroresManejador.catch(controlador.insertar));
ruteador.put(
  "/:id",
  autenticado,
  erroresManejador.catch(controlador.modificar)
);
ruteador.delete(
  "/:id",
  autenticado,
  erroresManejador.catch(controlador.eliminar)
);

export { ruteador };
