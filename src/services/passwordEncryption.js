const bcrypt = require("bcrypt");

class Password {
  constructor() {
    this.salt = 10;
  }

  async encrypt(password) {
    return await bcrypt.hash(password, this.salt);
  }
  decrypt() {}
  compare() {}
}

module.exports = new Password();
