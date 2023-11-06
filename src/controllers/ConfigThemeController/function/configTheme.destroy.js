const ConfigTheme = require("../../../database/models/configTheme.model");
const { log } = require("../../../services/logger");

module.exports.deleteTheme = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do tema deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const configTheme = await ConfigTheme.destroy({
      where: {
        id: id,
      },
    });

    if (configTheme == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum tema foi localizado pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `o tema ${id}`, req);
      return res
        .status(200)
        .send({ message: "Tema foi deletado com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
