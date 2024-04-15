import { Cliente } from "../data-structure/Cliente";

// Cuarto filtro: Verifica si necesita asistencia y lo imprime en consola.
export const checkNeedsAssistence = (client: Cliente): Cliente => {
    let message: string = `La persona ${client.nombre} ${client.apellido} sera agendado en el proceso comun`
    if(client.necesita_asistencia_movilidad){
        message = `La persona ${client.nombre} ${client.apellido} necesita asistencia en movilidad`
    }
    console.log(message);
    return client;
  };