'use strict'
const PasswordComponent = require('../components/register/password')

class Register {
  constructor() {
    this.password = new PasswordComponent()
  }
}
module.exports = Register