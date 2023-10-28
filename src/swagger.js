require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";
const endPointsFiles = ["src/routes/index.js"];

const {
  env: { APP_PORT },
} = process;

const doc = {
  swagger: "3.0",
  info: {
    version: "1.0.0",
    title: "LABMedicine LTDA",
    description: "API de gestão clinica # SQUAD 05",
  },
  host: `localhost:${APP_PORT}`,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json", "application/xml"],
  produces: ["application/json"],

  tags: [
    {
      name: "Users",
      description: "Requisições de usuários",
    },
    { name: "Patients", description: "Requisições de pacientes" },
    { name: "Appointment", description: "Requisições de consultas" },
    { name: "Exams", description: "Requisições de exames" },
  ],

  definitions: {
    userStoreBody: {
      fullName: "Osvaldo Tiago Ferreira",
      gender: "male",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      cpf: "135.735.415-00",
      phoneNumber: "79998355326",
      type: "medic",
      password: "Tm9r6xUxBK",
      systemStatus: true,
    },
    userStore201: { message: "Usuário criado com sucesso" },
    userStore400: { message: "Campo cpf deve estar no formato 000.000.000-00" },
    userStore409: { message: "E-mail already exists" },
    userStore500: { message: "Assignment to constant variable." },
    userIndex200: {
      data: [
        {
          id: 1,
          fullName: "John Doe",
          gender: "male",
          email: "john_doe@gmail.com",
          cpf: "123.456.789-10",
          phoneNumber: "(21) 9 8888 7777",
          type: "medic",
          systemStatus: true,
          createdAt: "2023-10-15T00:14:49.882Z",
          updatedAt: "2023-10-15T00:14:49.882Z",
        },
        {
          id: 7,
          fullName: "Jane Doe",
          gender: "female",
          email: "jane_doe@gmail.com",
          cpf: "987.654.321-00",
          phoneNumber: "(21) 6 5555 4444",
          type: "medic",
          systemStatus: true,
          createdAt: "2023-10-16T23:57:25.431Z",
          updatedAt: "2023-10-16T23:57:25.431Z",
        },
      ],
    },
    userDestroy200: { message: "Usuário foi deletado com sucesso." },
    userDestroy400: { message: "Usuário foi deletado com sucesso." },
    userUpdateBody: {
      fullName: "John Doe",
      gender: "male",
      phoneNumber: "21982755867",
      type: "medic",
      password: "123456",
    },
    userUpdate200: { message: "Usuário atualizado com sucesso" },
    userUpdate400: { message: "Usuário não encontrado" },
    userUpdate500: { message: "Assignment to constant variable." },
    userResetBody: {
      id: 1,
      email: "i365c2a@gmail.com",
      password: "12345627",
    },
    userReset200: { message: "Senha atualizada com sucesso" },
    userReset400: { message: "Usuário não encontrado" },
    patientStoreBody: {
      fullName: "Osvaldo Tiago Ferreira",
      gender: "male",
      birthday: "1984-03-13",
      cpf: "135.735.415-00",
      rg: "16.238.785-4",
      civilStatus: "married",
      phoneNumber: "79998355326",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      nationality: "brasileiro",
      emergencyContact: "7938460870",
      listOfAllergies: "camarão, lagosta, lula",
      specificCare: "",
      healthInsurance: "",
      insuranceNumber: "",
      insuranceExpirationDate: "2023-1-1",
      systemStatus: true,
      userId: 1,
      address: {
        zipCode: "49067080",
        city: "Aracaju",
        state: "SE",
        street: "Rua Isabel Coleta",
        number: "191",
        complement: "",
        neighborhood: "Porto D'Antas",
        referencePoint: "",
      },
    },
    patientStore201: { message: "Paciente criado com sucesso" },
    patientStore400: {
      type: "ValidationError",
      message:
        "Campo estado civil deve ser um dos seguintes valores: single, married,divorced,widowed,separated",
      errors: [
        "Campo estado civil deve ser um dos seguintes valores: single, married,divorced,widowed,separated",
      ],
    },
    patientStore409: {
      message: "Validation error",
      errors: [
        {
          message: "userId must be unique",
          type: "unique violation",
          path: "userId",
          value: "3",
          origin: "DB",
          instance: {
            id: null,
            fullName: "Osvaldo Tiago Ferreira",
            gender: "male",
            birthday: "1984-03-13T00:00:00.000Z",
            cpf: "135.735.415-00",
            rg: "16.238.785-4",
            civilStatus: "married",
            phoneNumber: "79998355326",
            email: "osvaldo.tiago.ferreira@supracolor.com.br",
            nationality: "brazileiro",
            emergencyContact: "7938460870",
            listOfAllergies: "camarão, lagosta, lula",
            specificCare: "",
            healthInsurance: "",
            insuranceNumber: "",
            insuranceExpirationDate: "2023-1-1",
            systemStatus: true,
            userId: 3,
            addressId: 43,
            updatedAt: "2023-10-28T19:40:28.337Z",
            createdAt: "2023-10-28T19:40:28.337Z",
          },
          validatorKey: "not_unique",
          validatorName: null,
          validatorArgs: [],
        },
      ],
    },
  },
};

swaggerAutogen(outputFile, endPointsFiles, doc);
