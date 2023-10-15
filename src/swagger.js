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
  ],

  definitions: {
    userStoreBody: {
      fullName: "John Doe",
      gender: "female",
      email: "john_doe@gmail.com",
      cpf: "123.456.789-10",
      phoneNumber: "21982755867",
      type: "medic",
      password: "123456",
      systemStatus: true,
    },
    userStore201: { message: "Usuário criado com sucesso" },
    userStore400: { message: "Campo cpf deve estar no formato 000.000.000-00" },
    userStore409: { message: "E-mail already exists" },
    userStore500: { message: "Assignment to constant variable." },
  },
};

swaggerAutogen(outputFile, endPointsFiles, doc);
