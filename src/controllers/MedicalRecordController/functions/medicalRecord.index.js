const Patient = require("../../../database/models/patient.model");
const Appointment = require("../../../database/models/appointment.model");
const Diet = require("../../../database/models/diet.model");
const Exam = require("../../../database/models/exam.model");
const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const Medicine = require("../../../database/models/medicine.model");
const {log} = require("../../../services/logger");
const {throwError} = require("../../../services/routeError");

module.exports.findAllMedicalRecords = async (req, res) => {
    try {
        const {
            query: { patientId, patientName }
        } = req;

        if ((patientId && isNaN(patientId))) throwError("Id do paciente deve ser um INTEGER", 400);

        const modelsToInclude = [Appointment, Diet, Exam, Medicine, PhysicalExercise];

        let records;
        if (!!patientId ^ !!patientName) {
            if (patientId) records = await Patient.findByPk(patientId, {include: modelsToInclude});
            else records = await Patient.findOne({
                include: modelsToInclude,
                where: { fullName: patientName }
            });
            if (!records) throwError("Nenhum paciente encontrado com as credenciais enviadas", 400)
            await log(res.locals.currentUser, "o prontuário", req, records)
        } else if (patientId && patientName){
            records = await Patient.findByPk(patientId, {include: modelsToInclude});
            if (!records) throwError("Nenhum paciente encontrado com as credenciais enviadas", 400);
            if (records.fullName !== patientName) throwError("Id e nome de paciente não correspondem a mesma entidade", 400);
            await log(res.locals.currentUser, "o prontuário", req, records)
        } else {
            records = await Patient.findAll({
                include: modelsToInclude
            });
            await log(res.locals.currentUser, "os prontuários", req)
        }
        return res.status(200).send({data: records});
    } catch (err) {
        console.log(err);
        return res.status(err.status || 500).send({ err: err.message });
    }
}