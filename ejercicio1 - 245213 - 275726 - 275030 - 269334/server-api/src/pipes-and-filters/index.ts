import { Cliente } from "./data-structure/Cliente";
import { checkNeedsAssistence } from "./filters/filters";
import { Pipeline } from "./pipeline/Pipeline";
import { QueueFactory } from "./pipeline/QueueFactory";
import fs from "fs";

const queueFactory = QueueFactory.getQueueFactory<Cliente>;

const pipeline = new Pipeline<Cliente>(
  [
    checkNeedsAssistence
  ],
  queueFactory
);

let outputs: string[] = [];

pipeline.on("finalOutput", (data: Cliente) => {
  outputs.push("Final output: " + data.nombre);
  if (outputs.length === 100) {
    fs.writeFileSync("outputs.txt", outputs.join("\n"));
  }
});

pipeline.on("errorInFilter", (error: Error, data: Cliente) => {
  outputs.push("Error in filter: " + error.message + " " + data.nombre);
  if (outputs.length === 100) {
    fs.writeFileSync("outputs.txt", outputs.join("\n"));
  }
});

export const processClients = (client: Cliente) => {
  pipeline.processInput({
    nombre: client.nombre, apellido: client.apellido, cedula: client.cedula, telefono: client.telefono,
    departamento: client.departamento, necesita_asistencia_movilidad: client.necesita_asistencia_movilidad
  });
};
