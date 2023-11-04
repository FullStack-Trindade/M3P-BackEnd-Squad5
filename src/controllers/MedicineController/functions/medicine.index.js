const Medicine = require("../../../database/models/medicine.model");
const { log } = require("../../../services/logger");

module.exports.findAllMedicine = async (req, res) => {
  try {
    const {
      params: { id },
      query: { patientId },
    } = req;
    if ((patientId && isNaN(patientId)) || (id && isNaN(id))) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    if (id) {
      const medicine = await Medicine.findByPk(id);
      if (!medicine) {
        const err = new Error("Medicamento não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      await log(
        res.locals.currentUser,
        `o medicamento ${id}`,
        req,
        medicine.patientId
      );
      return res.status(200).send({ data: medicine });
    }
    const medicine = await (patientId
      ? Medicine.findAll({ where: { patientId: patientId } })
      : Medicine.findAll());

    await log(res.locals.currentUser, `os medicamentos`, req, patientId);
    return res.status(200).send({ data: medicine });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).send({ err: err.message });
  }
};
