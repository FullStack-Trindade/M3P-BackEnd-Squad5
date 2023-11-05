const { deleteTheme } = require("./function/configTheme.destroy");
const { findAllThemes } = require("./function/configTheme.index");
const { createNewTheme } = require("./function/configTheme.store");
const { updateTheme } = require("./function/configTheme.update");

class ConfigThemeController {
  async index(req, res) {
    // #swagger.tags = ['ConfigTheme']
    // #swagger.summary = 'Retorna todas as configurações cadastradas ou apenas retorna as configurações de 1 usuário'
    // #swagger.description = 'Endpoint retornar todas as configurações cadastradas no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/configThemeIndex200" }
        } */

    await findAllThemes(req, res);
  }
  async store(req, res) {
    // #swagger.tags = ['ConfigTheme']
    // #swagger.summary = 'Cadastra uma nova configuração'
    // #swagger.description = 'Endpoint para cadastrar uma nova configuração no banco de dados'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:"
        <ul>
          <li><b>primaryColor</b>: Cor primária da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>secondaryColor</b>: Cor secundária da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>primaryTextColor</b>: Cor de texto primário da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>secondaryTextColor</b>: Cor de texto secundário da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>companyName</b>: Nome da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>slogan</b>: Slogan da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>logo</b>: Logo da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuario <mark>Campo obrigatório</mark></li>
          </ul>",
        type: "object",
        schema: { $ref: "#/definitions/configThemeStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/configThemeStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Id do usuário não existe ou esta errado',
          schema: { $ref: "#/definitions/configThemeStore400" }
        } */

    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/configThemeStore500" }
        } */
    await createNewTheme(req, res);
  }
  async update(req, res) {
    // #swagger.tags = ['ConfigTheme']
    // #swagger.summary = 'Atualiza uma configuração'
    // #swagger.description = 'Endpoint para atualizar uma configuração por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'ConfigTheme ID.'}

    /* #swagger.parameters["body"] = { 
          in: "body",
        description:"
       <ul>
          <li><b>primaryColor</b>: Cor primária da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>secondaryColor</b>: Cor secundária da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>primaryTextColor</b>: Cor de texto primário da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>secondaryTextColor</b>: Cor de texto secundário da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>companyName</b>: Nome da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>slogan</b>: Slogan da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>logo</b>: Logo da empresa da configuração de tema<mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: O id do usuario <mark>Campo obrigatório</mark></li>
          </ul>",
            type: "object",
            schema: { $ref: "#/definitions/configThemeUpdateBody" },
            required: true} */

    /* #swagger.responses[200] = { 
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/configThemeUpdate200" }
            } */
    /* #swagger.responses[400] = { 
              description: 'Exemplo de resposta de quando não for localizado um consulta com o Id fornecido',
              schema: { $ref: "#/definitions/configThemeUpdate400" }
            } */
    /* #swagger.responses[500] = { 
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/configThemeStore500" }
            } */
    await updateTheme(req, res);
  }
  async destroy(req, res) {
    // #swagger.tags = ['ConfigTheme']
    // #swagger.summary = 'Deleta uma configuração'
    // #swagger.description = 'Endpoint para deletar uma configuração por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'ConfigTheme ID.'}
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/configThemeDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado uma configuração com o Id fornecido',
          schema: { $ref: "#/definitions/configThemeDestroy400" }
        } */
    await deleteTheme(req, res);
  }
}

module.exports = new ConfigThemeController();
