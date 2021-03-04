'use strict'
const Helper = require('protractor-helper')

const Common = require('../common')
const data = require('../../jsonfiles/global.json')

class Login extends Common {
  constructor() {
    super()
    this._fieldUserName = element(by.id('username'))
    this._optionCreateAnAnccout = element.all(by.css('.txt-body-sm.color-brand-1')).get(0)
    this._fieldEmailGmail = element(by.id('identifierId'))
    this._fieldPasswordGmail = element(by.css('.Xb9hP [type="password"]'))
    this._buttonNext = element(by.id('identifierNext'))
    this._buttonNextGmail = element.all(by.css('.CwaK9')).get(0)
    this._buttonGmail = element(by.css('.GO2BGF-CFI'))
    // this._buttonConnection = element(by.id('details-button'))
    // this._linkConnection = element(by.id('proceed-link'))
    // this._smsConnection = element(by.id('icon_1_0_1'))
  }

  get userName() {
    return this._fieldUserName
  }
  get optionCreateAnAnccout() {
    return this._optionCreateAnAnccout
  }
  get fieldEmailGmail() {
    return this._fieldEmailGmail
  }
  get fieldPasswordGmail() {
    return this._fieldPasswordGmail
  }
  get buttonNext() {
    return this._buttonNext
  }
  get buttonNextGmail() {
    return this._buttonNextGmail
  }
  get buttonGmail() {
    return this._buttonGmail
  }
  // get buttonConnection() {
  //   return this._buttonConnection
  // }
  // get linkConnection() {
  //   return this._linkConnection
  // }
  // get smsConnection() {
  //   return this._smsConnection
  // }

  cpfLegacy() {
    Helper.fillFieldWithText(this.userName, data.creadentials.userLegacy)
    Helper.click(this.btnContinue)
  }
  cpfUnlock() {
    Helper.fillFieldWithText(this.userName, data.creadentials.userUnlock)
    Helper.click(this.btnContinue)
  }
  cpfChange() {
    Helper.fillFieldWithText(this.userName, data.creadentials.userChange)
    Helper.click(this.btnContinue)
  }
  cpfFirstAccess() {
    Helper.fillFieldWithText(this.fieldCpf, data.creadentials.userFirstAccess)
    Helper.click(this.btnContinue)
  }
  whatIsYourCPFPSP() {
    Helper.fillFieldWithText(this.userName, data.creadentials.userPSP)
    Helper.click(this.btnContinue)
  }
  whatIsYourCPFNPSP() {
    Helper.fillFieldWithText(this.userName, data.creadentials.userNPSP)
    Helper.click(this.btnContinue)
  }
  createAnAnccout() {
    browser.sleep(9000)
    Helper.click(this.optionCreateAnAnccout)
  }
  // fillFieldCpf(data) {
  //   Helper.fillFieldWithText(this.fieldCpf, data.cpf)
  //   Helper.click(this.btnContinue)
  // }
  fillInPersonalDetails() {
    Helper.fillFieldWithText(this.fieldFullName, data.personal.name)
    Helper.fillFieldWithText(this.fieldCellPhone, data.creadentials.cellPhone)
    Helper.fillFieldWithText(this.fieldEmail, data.personal.emailAddress)
    Helper.click(this.btnContinue)
  }
  clickGmail() {
    Helper.click(this.buttonGmail)
  }
  gmail() {
    Helper.fillFieldWithText(this.fieldEmailGmail, data.creadentials.emailGmail)
    Helper.click(this.buttonNext)
    Helper.fillFieldWithText(this.fieldPasswordGmail, data.creadentials.passwordGmail)
    Helper.click(this.buttonNextGmail)
    browser.sleep(10000)
  }
  // connection() {
  //   Helper.click(this.buttonConnection)
  //   Helper.click(this.linkConnection)
  //   Helper.click(this.smsConnection)
  // }
}
module.exports = Login