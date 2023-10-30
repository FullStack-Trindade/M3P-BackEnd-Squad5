const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const { log } = require("../../../services/logger");

module.exports.findAllPhysicalExercise = async (req, res) => {
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
      const physicalExercise = await PhysicalExercise.findByPk(id);
      if (!physicalExercise) {
        const err = new Error("Exercicio físico não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      await log(
        res.locals.currentUser,
        `a consulta ${id}`,
        req,
        physicalExercise.patientId
      );
      return res.status(200).send({ data: physicalExercise });
    }
    const physicalExercise = patientId
      ? await PhysicalExercise.findAll({ where: { patientId: patientId } })
      : await PhysicalExercise.findAll();
    await log(
      res.locals.currentUser,
      `os exercicios físicos ${id}`,
      req,
      patientId
    );
    return res.status(200).send({ data: physicalExercise });
  } catch (err) {
    return res.status(err.status || 500).send({ err: err.message });
  }
};
