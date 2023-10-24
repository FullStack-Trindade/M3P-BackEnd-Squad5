const { createNewMedicine } = require("./functions/medicine.store");

class MedicineController {
    async store(req, res) {
        // #swagger.tags = ['Medicine']
        // #swagger.summary = 'Cadastra um novo medicamento'
        // #swagger.description = 'Endpoint para cadastrar um novo medicamento no banco de dados'
        /* #swagger.parameters["body"] = { 
            in: "body",
            description:"
            <u>
              <li><b>name</b>: Nome do medicamento com máximo e mínimo de 100 e 5 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
              <li><b>date</b>: Data do medicamento <mark>Campo obrigatório</mark></li>
              <li><b>time</b>: Hora do medicamento <mark>Campo obrigatório</mark></span></li>
              <li><b>medicineType</b>: Tipo do medicamento tem opções pré-definidas: capsule, pill, liquid, cream, gel, inhalation, injection ou spray ou % <mark>Campo obrigatório</mark></li>
              <li><b>amount</b>: Quantidade deve ser um número<mark>Campo obrigatório</mark></li>
              <li><b>unit</b>: Unidade do medicamento tem opções pré-definidas: mg, mcg, g, ml ou % <mark>campo obrigatório</mark></li>
              <li><b>patientId</b>: O id do paciente deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
              <li><b>userId</b>: O id do usuário deve ser um número inteiro.<mark>Campo obrigatório</mark></li>
              <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, será cadastrado como Ativo</li>
             </u>",
            type: "object",
            schema: { $ref: "#/definitions/medicineStoreBody" },
            required: true} */
        /* #swagger.responses[201] = { 
              description: 'Exemplo de resposta de sucesso',
              schema: { $ref: "#/definitions/medicineStore201" }
            } */
        /* #swagger.responses[400] = { 
              description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Id do Paciente não existe ou esta errado',
              schema: { $ref: "#/definitions/medicineStore400" }
            } */
    
        /* #swagger.responses[500] = { 
              description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
              schema: { $ref: "#/definitions/medicineStore500" }
            } */
    
        await createNewMedicine(req, res);
      }
}

module.exports = new MedicineController();
