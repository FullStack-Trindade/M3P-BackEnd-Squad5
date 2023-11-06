const {findAllLogs} = require("./functions/log.index");

class LogController {
  async index(req, res) {
    // #swagger.tags = ['Logs']
    // #swagger.summary = 'Retorna todos os logs do sistema do mais recente para o mais antigo'
    // #swagger.description = 'Endpoint retornar todos os logs do sistema.'
    /* #swagger.responses[200] = {
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/logIndex200" }
        } */
    await findAllLogs(req, res);
  }
}

module.exports = new LogController();