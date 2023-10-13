const bcrypt = require("bcrypt");

const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

class Password {
  constructor() {
    this.salt = 10;
  }

  encrypt(password) {
    return password;
  }
  decrypt() {}
  compare() {}
}

module.exports = new Password();
