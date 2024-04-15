import express, { Express, Request, Response } from "express";
import { processClients } from "./pipes-and-filters";
import { Cliente } from "./pipes-and-filters/data-structure/Cliente";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.post("/client", (req: Request, res: Response) => {
  console.log("Received data:", req.body);

  const client = req.body.client as Cliente;

  if (!client) {
    return res.status(400).send({ message: "client is required" });
  }

    if (!client.nombre || !client.apellido || !client.cedula || !client.departamento 
      || client.necesita_asistencia_movilidad == null || !client.telefono) {
      return res.status(400).send({ message: "Error en los datos" });
    }

    res
      .status(200)
      .send({ message: `Se ha iniciado el proceso de agenda para la persona  ${client.nombre} ${client.apellido}` , client: req.body.client });

    processClients(req.body.client);
  });

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
