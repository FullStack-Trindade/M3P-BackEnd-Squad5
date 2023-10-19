const { createNewAppointment } = require("./functions/appointment.store");

class AppointmentController {
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
}

module.exports = new AppointmentController();