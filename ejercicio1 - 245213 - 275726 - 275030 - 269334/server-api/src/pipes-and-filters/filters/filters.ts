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
export const filterInorrectTelephone = (input: Cliente): Cliente => {
    if ( !input.telefono.startsWith("09") || input.telefono.replace(/\s/g, "").length !== 9 || !/^\d+$/.test(input.telefono.replace(/\s/g, ""))) 
    {
      console.log("Error teléfono: " + input.telefono);
      throw new Error("Error teléfono");
    }
    return input;
  };
export const ValidatorDepartament = (input: Cliente): Cliente => {
    const depList = ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja",
        "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó",
        "Treinta y Tres"];

    const depto: string = input.departamento;
    let isValid = false;
    for (let i = 0; i < depList.length; i++) {
        if (depto === depList[i]) {
            isValid = true;
            break;
        }
    }
    if (isValid) {
        return input;
    } else {
        console.log("El departamento " + depto + " NO es válido");
        throw new Error("El departamento " + depto + " NO es válido");
    }
}


export const filterCedula = (input: Cliente): Cliente => {
    const cedulaStr = input.cedula.toString();
    const longitudValida = cedulaStr.length >= 7 && cedulaStr.length <= 8;
    const noComienzaConCero = cedulaStr[0] !== '0';

    if (!longitudValida || !noComienzaConCero) {
        console.log("Cedula invalida " + input.cedula );
        throw new Error("Error cedula");
    }
  
    return input;
  }