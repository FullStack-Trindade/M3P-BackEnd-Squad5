const { createNewPatient } = require("./function/patient.store");
const { findAllPatients } = require("./function/patient.index");
const { deletePatient } = require("./function/patient.destroy");
const { findOnePatients } = require("./function/patient.show");
const { updatePatient } = require("./function/patient.update");

class PatientController {
  async store(req, res) {
    // #swagger.tags = ['Patients']
    // #swagger.summary = 'Cadastra um novo paciente.'
    // #swagger.description = 'Endpoint para cadastrar um novo paciente e endereço'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:"
        <u>
          <li><b>fullName</b>: Nome do paciente com máximo e mínimo de 64 e 8 caracteres, respectivamente.<mark>Campo obrigatório</mark></li>
          <li><b>gender</b>: Genero do paciente, com opções pré-definidas: male, female, other. <mark>Campo obrigatório</mark></li>
          <li><b>birthday</b>: Data de nascimento do paciente, no formato YYYY-MM-DD.<mark>Campo obrigatório</mark></li>
          <li><b>cpf</b>: CPF do paciente no formato 000.000.000-00 <mark>Campo obrigatório</mark></li>
          <li><b>RG</b>: RG do paciente, deve conter no máximo 20 caracteres. <mark>Campo obrigatório</mark></li>
          <li><b>civilStatus</b>: Estado civil do paciente, deve contemplar um dos seguintes valores: single, married, divorced, widowed, separated. <mark>Campo obrigatório</mark></span></li>
          <li><b>phoneNumber</b>: Telefone do usuário, deve ser informado apenas os números e deve possui o DDD: 21988887777. <mark>Campo obrigatório</mark></li>
          <li><b>email</b>: E-mail utilizado pelo paciente. <mark>Campo obrigatório</mark></li>
          <li><b>nationality</b>: Nacionalidade do paciente. Campo deve ter de 8 a 64 caracteres <mark>Campo obrigatório</mark></li>
          <li><b>emergencyContact</b>: Contato de emergencia do paciente, deve ser informado apenas os números e deve possui o DDD: 21988887777. <mark>Campo obrigatório</mark></li>
          <li><b>listOfAllergies</b>: Lista de alergias do paciente.</li>
          <li><b>specificCare</b>: Cuidados especiais do paciente.</li>
          <li><b>healthInsurance</b>: Convênio do paciente.</li>
          <li><b>insuranceNumber</b>: Número do convênio do paciente.</li>
          <li><b>insuranceExpirationDate</b>: Validade do convênio do paciente. Deve estar no formato  YYYY-MM-DD</li>
          <li><b>systemStatus</b>: Status no sistema, sendo sendo um boolean com valor TRUE. OBS: caso não informado, <mark>será cadastrado como TRUE(Ativo)</mark></li>
          <li><b>userId</b>: ID do usuário relacionado. OBS: Não pode ter dois pacientes apontando para o mesmo ID do usuário, <mark>Campo obrigatório</mark></li>
          <li><b>address</b>: Objeto com os dados do endereço do paciente, sendo eles:</li>
          <ul>
            <li>zipCode: CEP do paciente.<mark>Campo Obrigatório</mark></li>
            <li>city: Cidade do paciente.<mark>Campo Obrigatório</mark></li>
            <li>state: Estado do paciente.<mark>Campo Obrigatório</mark></li>
            <li>street: Logradouro do paciente.<mark>Campo Obrigatório</mark></li>
            <li>number: Numero do logradouro do paciente.<mark>Campo Obrigatório</mark></li>
            <li>complement: Complemento do logradouro, caso exista.</li>
            <li>neighborhood: Bairro do paciente.<mark>Campo Obrigatório</mark></li>
            <li>referencePoint: Ponto de referencia</li>
          </ul>
        </u>",
        type: "object",
        schema: { $ref: "#/definitions/patientStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/patientStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: informando estado civil não listado',
          schema: { $ref: "#/definitions/patientStore400" }
        } */
    /* #swagger.responses[409] = { 
          description: 'Erro de duplicidade\nExemplo: Referenciando um userId já referenciado.',
          schema: { $ref: "#/definitions/patientStore409" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/userStore500" }
        } */

    await createNewPatient(req, res);
  }

  async index(req, res) {
    // #swagger.tags = ['Patients']
    // #swagger.summary = 'Lista os pacientes cadastrados'
    // #swagger.description = 'Endpoint para listar os pacientes.'
    // #swagger.parameters['email'] = {in: 'query', type: 'string', description: 'E-mail do paciente. (opcional)'}

    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/patientIndex200" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/userStore500" }
        } */
    await findAllPatients(req, res);
  }

  async destroy(req, res) {
    // #swagger.tags = ['Patients']
    // #swagger.summary = 'Deleta um paciente'
    // #swagger.description = 'Endpoint para deletar um paciente por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'User ID.'}
    /* #swagger.responses[202] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/patientDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando é passado um Id não inteiro.',
          schema: { $ref: "#/definitions/patientDestroy400" }
        } */
    await deletePatient(req, res);
  }

  async show(req, res) {
    // #swagger.tags = ['Patients']
    // #swagger.summary = 'Exibe um paciente pelo ID'
    // #swagger.description = 'Endpoint para exibir os dados de um paciente por meio de seu Id.'
    // #swagger.parameters['id'] = {in: 'path', type: 'integer', description: 'User ID.'}
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/patientShow200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando é passado um Id não inteiro.',
          schema: { $ref: "#/definitions/patientShow400" }
        } */
    await findOnePatients(req, res);
  }

  async update(req, res) {
    await updatePatient(req, res);
  }
}

module.exports = new PatientController();
