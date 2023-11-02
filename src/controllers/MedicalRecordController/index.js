const { findAllMedicalRecords } = require("./functions/medicalRecord.index");

class MedicalRecordController {
    async index(req, res) {
        // #swagger.tags = ['MedicalRecords']
        // #swagger.summary = 'Retorna todos os prontuários cadastrados ou apenas retorna os prontuários de 1 paciente'
        // #swagger.description = 'Endpoint retorna todos os prontuários cadastradas no banco de dados.'
        // #swagger.parameters['patientId'] = {in: 'query', type: 'integer', description: 'id do paciente. (opcional)'}
        // #swagger.parameters['patientName'] = {in: 'query', type: 'string', description: 'nome do paciente. (opcional)'}
        /* #swagger.responses[200] = {
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/medicalRecordIndex200" }
            } */
        /* #swagger.responses[400] = {
          description: 'Valida os parâmetros e trás o motivo da falha.\n Exemplo: Id do Paciente não existe ou esta errado',
          schema: { $ref: "#/definitions/medicalRecordIndex400" }
        } */
        /* #swagger.responses[500] = {
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/medicalRecordIndex500" }
            } */
        await findAllMedicalRecords(req, res);
    }
}

module.exports = new MedicalRecordController();