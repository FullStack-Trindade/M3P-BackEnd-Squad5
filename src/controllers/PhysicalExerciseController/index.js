const {
  createNewPhysicalExercise,
} = require("./functions/physicalExercise.store.js");
const {
  updatePhysicalExercise,
} = require("./functions/physicalExercise.update.js");

class PhysicalExercise {
  async store(req, res) {
    // #swagger.tags = ['PhysicalExercise']
    // #swagger.summary = 'Cadastra um novo exercicio físico'
    // #swagger.description = 'Endpoint para cadastrar um novo exercicio físico no banco de dados'
    /* #swagger.parameters["body"] = {
   in: "body",
   description:"
   <ul>
     <li><b>exerciseName</b>: Nome do exercicio físico com máximo e mínimo de 100 e 5 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
     <li><b>date</b>: Data do exercicio físico <mark>Campo obrigatório</mark></li>
     <li><b>time</b>: Hora do exercicio físico <mark>Campo obrigatório</mark></span></li>
     <li><b>exerciseType</b>: Tipo de exercicio físico com opções pré-definidas: aerobic endurance,muscular endurance,flexibility,strength,agility,other <mark>Campo obrigatório</mark></li>
     <li><b>quantityPerWeek</b>: Quantidade por semana deve ser um número<mark>Campo obrigatório</mark></li>
     <li><b>description</b>: Descrição do exercicio físico com máximo e mínimo de 10 e 1000 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
     <li><b>patientId</b>: O id do paciente deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
     <li><b>userId</b>: O id do usuário deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
     <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
    </ul>",
   type: "object",
   schema: { $ref: "#/definitions/physicalExerciseStoreBody" },
   required: true} */
    /* #swagger.responses[201] = {
     description: 'Exemplo de resposta de sucesso',
     schema: { $ref: "#/definitions/physicalExerciseStore201" }
   } */
    /* #swagger.responses[400] = {
     description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Id do Paciente não existe ou esta errado',
     schema: { $ref: "#/definitions/physicalExerciseStore400" }
   } */

    /* #swagger.responses[500] = {
     description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
     schema: { $ref: "#/definitions/physicalExerciseStore500" }
   } */
    await createNewPhysicalExercise(req, res);
  }

  async update(req, res) {
    // #swagger.tags = ['PhysicalExercise']
    // #swagger.summary = 'Atualiza um  exercicio físico'
    // #swagger.description = 'Endpoint para atualizar um exercicio físico por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'physicalExercise ID.'}

    /* #swagger.parameters["body"] = {
          in: "body",
        description:"
        <ul>
           <li><b>exerciseName</b>: Nome do exercicio físico com máximo e mínimo de 100 e 5 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
           <li><b>date</b>: Data do exercicio físico <mark>Campo obrigatório</mark></li>
           <li><b>time</b>: Hora do exercicio físico <mark>Campo obrigatório</mark></span></li>
           <li><b>exerciseType</b>: Tipo de exercicio físico com opções pré-definidas: aerobic endurance,muscular endurance,flexibility,strength,agility,other <mark>Campo obrigatório</mark></li>
           <li><b>quantityPerWeek</b>: Quantidade por semana deve ser um número<mark>Campo obrigatório</mark></li>
           <li><b>description</b>: Descrição do exercicio físico com máximo e mínimo de 10 e 1000 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
           <li><b>patientId</b>: O id do paciente deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
           <li><b>userId</b>: O id do usuário deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
           <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
        </ul>",
            type: "object",
            schema: { $ref: "#/definitions/physicalExerciseUpdateBody" },
            required: true} */

    /* #swagger.responses[200] = {
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/physicalExerciseUpdate200" }
            } */
    /* #swagger.responses[400] = {
              description: 'Exemplo de resposta de quando não for localizado um exercicio físico com o Id fornecido',
              schema: { $ref: "#/definitions/physicalExerciseUpdate400" }
            } */
    /* #swagger.responses[500] = {
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/physicalExerciseStore500" }
            } */
    await updatePhysicalExercise(req, res);
  }
}

module.exports = new PhysicalExercise();
