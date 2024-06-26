import { Cliente } from "./data-structure/Cliente";
import { checkNeedsAssistence } from "./filters/filters";
import{
  filterInorrectTelephone,
  ValidatorDepartament,
} from "./filters/filters"
import { filterCedula } from "./filters/filters";
import { Pipeline } from "./pipeline/Pipeline";
import { QueueFactory } from "./pipeline/QueueFactory";
import fs from "fs";

const queueFactory = QueueFactory.getQueueFactory<Cliente>;

const pipeline = new Pipeline<Cliente>(
  [
    checkNeedsAssistence,
    filterInorrectTelephone,
    ValidatorDepartament,
    filterCedula,
  ],
  queueFactory
);

let outputs: string[] = [];

pipeline.on("finalOutput", (data: Cliente) => {
  outputs.push("Final output: " + data.nombre);
  console.log( `Se ha finalizado satisfactoriamente el proceso de agenda para la persona ${data.nombre} ${data.apellido}`);
});

pipeline.on("errorInFilter", (error: Error, data: Cliente) => {
  outputs.push("Error in filter: " + error.message + " " + data.nombre);
  console.log( `No se ha podido agendar ${data.nombre} ${data.apellido}`);
});

export const processClients = (client: Cliente) => {
  pipeline.processInput({
    nombre: client.nombre, apellido: client.apellido, cedula: client.cedula, telefono: client.telefono,
    departamento: client.departamento, necesita_asistencia_movilidad: client.necesita_asistencia_movilidad
  });
};
