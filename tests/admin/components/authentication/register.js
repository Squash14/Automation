'use strict'
const Helper = require('protractor-helper')

const Common = require('../common')
const data = require('../../jsonfiles/global.json')

class Register extends Common {
  constructor() {
    super()
    this._fieldName = element(by.css('.form-field input[id="name"]'))
    this._filedCell = element(by.css('.form-field input[id="cellPhone"]'))
    this._buttonIuupNpsp = element(by.css('.col-12.col-md-12.txt-center.mt-2.px-0 a'))
  }

  get name() {
    return this._fieldName
  }
  get cell() {
    return this._filedCell
  }
  get buttonIuupNpsp() {
    return this._buttonIuupNpsp
  }

  fillFieldNPSP() {
    browser.sleep(5000)
    Helper.fillFieldWithText(this.name, data.personal.name)
    Helper.fillFieldWithText(this.cell, data.personal.cell)
    Helper.fillFieldWithText(this.fieldEmailAddress, data.personal.emailAddress)
    Helper.fillFieldWithText(this.fieldEmailAddressConfirm, data.personal.emailAddress)
    Helper.fillFieldWithText(this.filedNewPassword, data.creadentials.password)
    Helper.fillFieldWithText(this.filedPasswordConfirm, data.creadentials.password)
    Helper.click(this.btnContinue)
  }
  clickButtonIUPP() {
    Helper.click(this.buttonIuupNpsp)
  }
}
module.exports = Register