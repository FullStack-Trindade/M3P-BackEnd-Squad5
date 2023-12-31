const { deleteExam } = require("./functions/exam.destroy");
const { findAllExam } = require("./functions/exam.index");
const { createNewExam } = require("./functions/exam.store");
const { updateExam } = require("./functions/exam.update");

class ExamController {
  async index(req, res) {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Retorna todos os exames cadastradas ou apenas retorna os exames de 1 paciente'
    // #swagger.description = 'Endpoint retornar todos os exames cadastradas no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/examIndex200" }
        } */
    await findAllExam(req, res);
  }
  async store(req, res) {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Cadastrar um novo exame'
    // #swagger.description = 'Endpoint para cadastrar um novo exame no banco de dados'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:"
        <ul>
          <li><b>name</b>: Nome do exame com máximo e mínimo de 64 e 8 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>examDate</b>: Data do exame <mark>Campo obrigatório</mark></li>
          <li><b>examTime</b>:Horário do exame <mark>Campo obrigatório</mark></span></li>
          <li><b>examType</b>: Tipo do exame com máximo e mínimo de 32 e 4 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>laboratory</b>:  Laboratório com máximo e mínimo de 32 e 4 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>documentURL</b>: URL do documento. <mark>Campo NÃO obrigatório</mark></li>
          <li><b>results</b>: Resultado do exame com máximo e mínimo de 1024 e 16 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>patientId</b>: O id do paciente <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuário <mark>Campo obrigatório</mark></li>
          <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
        </ul>",
        type: "object",
        schema: { $ref: "#/definitions/examStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/examStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Resultado do exame com máximo e mínimo de 1024 e 16 caracteres, respectivamente.',
          schema: { $ref: "#/definitions/examStore400" }
        } */
    /* #swagger.responses[409] = { 
          description: 'Erro de CPF e/ou E-mail já cadastrado\nExemplo: Tentativa de cadastrar um usuário com um e-mail existente no banco.',
          schema: { $ref: "#/definitions/examStore409" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/examStore500" }
        } */
    await createNewExam(req, res);
  }
  async destroy(req, res) {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Deleta um exame'
    // #swagger.description = 'Endpoint para deletar uma exame por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'Exam ID.'}
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/examDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado um exame com o Id fornecido',
          schema: { $ref: "#/definitions/examDestroy400" }
        } */
    await deleteExam(req, res);
  }
  async update(req, res) {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Atualiza uma exama'
    // #swagger.description = 'Endpoint para atualizar um exame por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'Exam ID.'}

    /* #swagger.parameters["body"] = { 
          in: "body",
        description:"
        <ul>
          <li><b>name</b>: Nome do exame com máximo e mínimo de 64 e 8 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>examDate</b>: Data do exame <mark>Campo obrigatório</mark></li>
          <li><b>examTime</b>:Horário do exame <mark>Campo obrigatório</mark></span></li>
          <li><b>examType</b>: Tipo do exame com máximo e mínimo de 32 e 4 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>laboratory</b>:  Laboratório com máximo e mínimo de 32 e 4 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>documentURL</b>: URL do documento. <mark>Campo NÃO obrigatório</mark></li>
          <li><b>results</b>: Resultado do exame com máximo e mínimo de 1024 e 16 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>patientId</b>: O id do paciente <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuário <mark>Campo obrigatório</mark></li>
          <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
        </ul>",
            type: "object",
            schema: { $ref: "#/definitions/examUpdateBody" },
            required: true} */

    /* #swagger.responses[200] = { 
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/examUpdate200" }
            } */
    /* #swagger.responses[400] = { 
              description: 'Exemplo de resposta de quando não for localizado o exane com o Id fornecido',
              schema: { $ref: "#/definitions/examUpdate400" }
            } */
    /* #swagger.responses[500] = { 
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/examStore500" }
            } */
    await updateExam(req, res);
  }
}

module.exports = new ExamController();
