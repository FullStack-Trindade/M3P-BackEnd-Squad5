const Log = require("../../../database/models/log.model");
module.exports.findAllLogs = async (req, res) => {
  try {
    const logs = await Log.findAll({
      order: [
        ["createdAt", "DESC"]
      ]
    });
    return res.status(200).send({data: logs})
  } catch (err) {
    return res.status(err.status || 500).send({ err: err.message });
  }
}