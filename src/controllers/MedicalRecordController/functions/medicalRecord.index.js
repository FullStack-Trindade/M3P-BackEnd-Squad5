const Patient = require("../../../database/models/patient.model");
const Appointment = require("../../../database/models/appointment.model");
const Diet = require("../../../database/models/diet.model");
const Exam = require("../../../database/models/exam.model");
const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const Medicine = require("../../../database/models/medicine.model");
const {log} = require("../../../services/logger");

module.exports.findAllMedicalRecords = async (req, res) => {
    try {
        const modelsToInclude = [Appointment, Diet, Exam, Medicine, PhysicalExercise];

        let records = await Patient.findAll({
            include: modelsToInclude
        });
        await log(res.locals.currentUser, "os prontuários", req)
        return res.status(200).send({data: records});
    } catch (err) {
        console.log(err);
        return res.status(err.status || 500).send({ err: err.message });
    }
}