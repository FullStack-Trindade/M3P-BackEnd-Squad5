const Log = require("../database/models/log.model");
const Patient = require("../database/models/patient.model");
const User = require("../database/models/user.model");

const METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT"
}

const methodToAction = {
    GET: "obteve",
    POST: "criou",
    DELETE: "removeu",
    PUT: "editou"
}

const userTypeMap = {
    "admin": "administrador",
    "medic": "médico",
    "nurse": "enfermeiro"
}

async function newLog(message, endpoint, httpVerb) {
    httpVerb = httpVerb.toLowerCase();
    await Log.create({
        message,
        endpoint,
        httpVerb
    })
}

/**
 * Log para objetos, caso paciente seja enviado, 
 * será adicionado o sufixo "do paciente ${nomo do paciente}""
 * @param {User | Number} user usuário ou id do usuário que executou a ação
 * @param {String} object objeto que sofreu a ação (ex 'uma consulta', 'um medicamento')
 * @param req requisição
 * @param {Patient | Number} patient paciente ou id do paciente (opcional)
 */
async function log(user, object, req, patient=undefined) {
    const endpoint = req.originalUrl;
    const httpVerb = req.method;
    if (Number.isInteger(user)) user = await User.findByPk(user);
    if (Number.isInteger(patient)) patient = await Patient.findByPk(patient);

    const action = methodToAction[httpVerb];
    const role = userTypeMap[user.type];
    const suffix = patient !== undefined
      ? ` do paciente ${patient?.fullName}`
      : "";
    const message = `${role} ${user.fullName} ${action} ${object}` + suffix;
    await newLog(message, endpoint, httpVerb);
}

module.exports = {
    METHOD,
    log,
}

