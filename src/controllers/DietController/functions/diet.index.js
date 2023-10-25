const Diet = require("../../../database/models/diet.model");

module.exports.findAllDiet = async (req, res) => {
  try {
    const {
      query: { patientId },
    } = req;
    if (patientId) {
      const diet = await Diet.findAll({
        where: { patientId: patientId },
      });
      return res.status(200).send({ data: diet });
    } else {
      const diet = await Diet.findAll();
      return res.status(200).send({ data: diet });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
