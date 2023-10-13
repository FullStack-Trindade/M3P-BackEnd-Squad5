const { createNewUser } = require("./functions/user.store");
const { findAllUsers } = require("./functions/user.index");

class UsersController {
  async store(req, res) {
    await createNewUser(req, res);
  }
  async index(req, res) {
    await findAllUsers(req, res);
  }
}

module.exports = new UsersController();
