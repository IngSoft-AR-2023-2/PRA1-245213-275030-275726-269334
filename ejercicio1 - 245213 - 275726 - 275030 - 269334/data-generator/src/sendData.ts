import axios from "axios";
const faker = require("faker");

const sendData = async () => {
  try {
    const clients = [
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 53246605,
        telefono: "098679922",
        departamento: 'Artigas',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 54446664,
        telefono: "095324832",
        departamento: 'Canelones',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 36715354,
        telefono: "91432235",
        departamento: 'Salto',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 53333336,
        telefono: "0976 65534",
        departamento: 'Buenos Aires',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: "Car@ct&r",
        apellido: faker.name.lastName(),
        cedula: 5554,
        telefono: "0976655",
        departamento: 'Salto',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 54446877,
        telefono: "0976A5534",
        departamento: '',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: "",
        apellido: faker.name.lastName(),
        cedula: 35544432,
        telefono: "096666534",
        departamento: 'Soriano',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: null,
        apellido: null,
        cedula: null,
        telefono: null,
        departamento: null,
        necesita_asistencia_movilidad: null
      },
      {
        nombre: faker.name.firstName(),
        apellido: "",
        cedula: 55444333,
        telefono: null,
        departamento: "",
        necesita_asistencia_movilidad: faker.datatype.boolean()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cedula: 45567899,
        telefono: "091226742",
        departamento: 'Colonia',
        necesita_asistencia_movilidad: faker.datatype.boolean()
      }
    ];

    clients.forEach(async client => {
      const response = await axios.post("http://localhost:3000/client", {
        client: client,
      });
      console.log("Data sent successfully:", response.data);
    });

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("Error:", error);
    }
  }
};

sendData();
