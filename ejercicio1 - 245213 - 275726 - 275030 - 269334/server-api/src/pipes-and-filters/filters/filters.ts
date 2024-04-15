import { Cliente } from "../data-structure/Cliente";

export const filterInorrectTelephone = (input: Cliente): Cliente => {
    if ( !input.telefono.startsWith("09") || input.telefono.replace(/\s/g, "").length !== 9 || !/^\d+$/.test(input.telefono.replace(/\s/g, ""))) 
    {
      console.log("Error teléfono: " + input.telefono);
      throw new Error("Error teléfono");
    }
    return input;
  };