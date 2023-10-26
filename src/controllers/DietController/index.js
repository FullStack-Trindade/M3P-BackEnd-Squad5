const { createNewDiet } = require("./functions/diet.store");

class DietController {
  async store(req, res) {
    // #swagger.tags = ['Diet']
    // #swagger.summary = 'Cadastra uma nova dieta'
    // #swagger.description = 'Endpoint para cadastrar uma nova dieta no banco de dados'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:"
        <ul>
          <li><b>name</b>: Nome da dieta com máximo e mínimo de 100 e 5 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>date</b>: Data da dieta <mark>Campo obrigatório</mark></li>
          <li><b>time</b>:Hora da dieta <mark>Campo obrigatório</mark></span></li>
          <li><b>dietType</b>: Tipo da dieta, podendo ser: low carb,dash,paleolítica,cetogênica,dukan,mediterrânea,outra <mark>Campo não obrigatório</mark></li>
          <li><b>description</b>: Descrição da dieta com máximo e mínimo de 10 e 1000 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
          <li><b>patientId</b>: O id do paciente <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuario <mark>Campo obrigatório</mark></li>
          </ul>",
        type: "object",
        schema: { $ref: "#/definitions/dietStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/dietStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Id do Paciente não existe ou esta errado',
          schema: { $ref: "#/definitions/dietStore400" }
        } */

    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/dietStore500" }
        } */

    await createNewDiet(req, res);
  }
}

module.exports = new DietController();
