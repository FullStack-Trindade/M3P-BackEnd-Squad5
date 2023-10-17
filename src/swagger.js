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
  },
};

swaggerAutogen(outputFile, endPointsFiles, doc);
