const Diet = require("../../../database/models/diet.model");

module.exports.findAllDiet = async (req, res) => {
  try {
    const {
      params: { id },
      query: { patientId },
    } = req;
    if ((patientId && isNaN(patientId)) || (id && isNaN(id))) {
      const err = new Error("patientId deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    if (id) {
      const diet = await Diet.findByPk(id);
      if (!diet) {
        const err = new Error("Dieta não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      return res.status(200).send({ data: diet });
    }
    if (patientId) {
      const diet = await Diet.findAll({
        where: { patientId: patientId },
      });

      return res.status(200).send({ data: diet });
    }
    const diet = await Diet.findAll();
    return res.status(200).send({ data: diet });
  } catch (err) {
    return res.status(err.status || 500).send({ err: err.message });
  }
};
