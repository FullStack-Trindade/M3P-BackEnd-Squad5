const { createNewUser } = require("./functions/user.store");

class UsersController {
  async store(req, res) {
    await createNewUser(req, res);
  }
}

module.exports = new UsersController();
