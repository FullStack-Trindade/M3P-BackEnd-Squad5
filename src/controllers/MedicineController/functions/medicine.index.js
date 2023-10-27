const Medicine = require("../../../database/models/medicine.model");

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
    
    return res.status(200).send({ data: medicine });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).send({ err: err.message });
  } 

};

