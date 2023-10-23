const { deleteAppointment } = require("./functions/appointment.destroy");
const { findAllAppointment } = require("./functions/appointment.index");
const { createNewAppointment } = require("./functions/appointment.store");
const { updateAppointment } = require("./functions/appointment.update");

class AppointmentController {
  async index(req, res) {
    // #swagger.tags = ['Appointment']
    // #swagger.summary = 'Retorna todas os consultas cadastrados ou apenas a que de 1 paciente'
    // #swagger.description = 'Endpoint retornar todas os consultas cadastradas no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/appointmentIndex200" }
        } */
    await findAllAppointment(req, res);
  }
  async store(req, res) {
    // #swagger.tags = ['Appointment']
    // #swagger.summary = 'Cadastra uma nova consulta'
    // #swagger.description = 'Endpoint para cadastrar uma nova consulta no banco de dados'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:"
        <u>
          <li><b>appointmentReason</b>: Motivo da consulta com máximo e mínimo de 64 e 8 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>appointmentDate</b>: Data da consulta <mark>Campo obrigatório</mark></li>
          <li><b>appointmentTime</b>:Hora da consulta <mark>Campo obrigatório</mark></span></li>
          <li><b>description</b>: Descrição da consulta com máximo e mínimo de 16 e 1024 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>dosagePrecautions</b>: Descrição dos medicamentos e precauções para o paciente <mark>Campo não obrigatório</mark></li>
          <li><b>patientId</b>: O id do paciente <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuario <mark>Campo obrigatório</mark></li>
          <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
          </u>",
        type: "object",
        schema: { $ref: "#/definitions/appointmentStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/appointmentStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Id do Paciente não existe ou esta errado',
          schema: { $ref: "#/definitions/appointmentStore400" }
        } */

    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/appointmentStore500" }
        } */

    await createNewAppointment(req, res);
  }

  async destroy(req, res) {
    // #swagger.tags = ['Appointment']
    // #swagger.summary = 'Deleta uma consulta'
    // #swagger.description = 'Endpoint para deletar uma consulta por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'Appointment ID.'}
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/appointmentDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado uma consulta com o Id fornecido',
          schema: { $ref: "#/definitions/appointmentDestroy200" }
        } */
    await deleteAppointment(req, res);
  }
  async update(req, res) {
    // #swagger.tags = ['Appointment']
    // #swagger.summary = 'Atualiza um consulta'
    // #swagger.description = 'Endpoint para atualizar um consulta por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'appointment ID.'}

    /* #swagger.parameters["body"] = { 
          in: "body",
        description:"
        <u>
          <li><b>appointmentReason</b>: Motivo da consulta com máximo e mínimo de 64 e 8 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>appointmentDate</b>: Data da consulta <mark>Campo obrigatório</mark></li>
          <li><b>appointmentTime</b>:Hora da consulta <mark>Campo obrigatório</mark></span></li>
          <li><b>description</b>: Descrição da consulta com máximo e mínimo de 16 e 1024 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>dosagePrecautions</b>: Descrição dos medicamentos e precauções para o paciente <mark>Campo não obrigatório</mark></li>
          <li><b>patientId</b>: O id do paciente <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuario <mark>Campo obrigatório</mark></li>
         </u>",
            type: "object",
            schema: { $ref: "#/definitions/appointmentUpdateBody" },
            required: true} */

    /* #swagger.responses[200] = { 
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/appointmentUpdate200" }
            } */
    /* #swagger.responses[400] = { 
              description: 'Exemplo de resposta de quando não for localizado um consulta com o Id fornecido',
              schema: { $ref: "#/definitions/appointmentUpdate400" }
            } */
    /* #swagger.responses[500] = { 
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/appointmentStore500" }
            } */
    await updateAppointment(req, res);
  }
}

module.exports = new AppointmentController();
