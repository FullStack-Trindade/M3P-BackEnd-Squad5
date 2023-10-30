const Medicine = require("../../../database/models/medicine.model");
const {log} = require("../../../services/logger");

module.exports.findAllMedicine = async (req, res) => {
  try {
    const {
      query: { patientId },
    } = req;
    if ((patientId && isNaN(patientId))) {
      const err = new Error("patientId deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    const medicine = await (patientId 
          ? Medicine.findAll({where: { patientId: patientId }}) 
          : Medicine.findAll());

    await log(res.locals.currentUser, `os medicamentos`, req, patientId);
    return res.status(200).send({ data: medicine });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).send({ err: err.message });
  } 

};

