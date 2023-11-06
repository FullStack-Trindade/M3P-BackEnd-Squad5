const ConfigTheme = require("../../../database/models/configTheme.model");
const { log } = require("../../../services/logger");

module.exports.findAllThemes = async (req, res) => {
  try {
    const {
      params: { id },
      query: { userId },
    } = req;
    if ((userId && isNaN(userId)) || (id && isNaN(id))) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    if (id) {
      const configTheme = await ConfigTheme.findByPk(id);
      if (!configTheme) {
        const err = new Error("Tema não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      await log(
        res.locals.currentUser,
        `o tema ${id}`,
        req,
        configTheme.userId
      );
      return res.status(200).send({ data: configTheme });
    }
    const configTheme = userId
      ? await ConfigTheme.findAll({ where: { userId: userId } })
      : await ConfigTheme.findAll();
    await log(res.locals.currentUser, `os temas ${id}`, req, userId);
    return res.status(200).send({ data: configTheme });
  } catch (err) {
    return res.status(err.status || 500).send({ err: err.message });
  }
};
