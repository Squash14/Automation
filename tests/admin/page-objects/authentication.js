'use strict'
const HelpComponent = require('../components/authentication/help')
const LoginComponent = require('../components/authentication/login')
const RegisterComponent = require('../components/authentication/register')

class Authentication {
  constructor() {
    this.relativeUrl = ""

    this.help = new HelpComponent()
    this.login = new LoginComponent()
    this.register = new RegisterComponent()
  }
}
module.exports = Authentication