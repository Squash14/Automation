'use strict'
const Helper = require('protractor-helper')

const Common = require('../common')

class Password extends Common {
  constructor() {
    super()
    this._buttonSendSms = element(by.id('btnSendToken'))
    this._buttonSendemail = element(by.css('.col-12 [type="button"]'))
  }

  get buttonSendSms() {
    return this._buttonSendSms
  }
  get buttonSendemail() {
    return this._buttonSendemail
  }

  requestTokenSMS() {
    Helper.click(this.buttonSendSms)
  }
  requestTokenEmail() {
    Helper.click(this.buttonSendemail)
  }
}
module.exports = Password