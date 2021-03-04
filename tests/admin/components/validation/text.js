'use strict'
const Helper = require('protractor-helper')
const Common = require('../common')

class Text extends Common {
  constructor() {
    super()
    this._alert = element.all(by.css('.txt-body-sm.mb-1')).get(0)
    this._alertPassword = element(by.css('.message.message-error'))
    this._alertConfirm = element(by.css('.login-title.txt-title-3.color-brand-1.txt-font-body.mb-1'))
    this._alertConfirmURA = element(by.css('.txt-title.txt-font-body.txt-initial.color-title.mr-auto'))

  }

  get alert() {
    return this._alert
  }
  get alertPassword() {
    return this._alertPassword
  }
  get alertConfirm() {
    return this._alertConfirm
  }
  get alertConfirmURA() {
    return this._alertConfirmURA
  }

  waitForText() {
    Helper.waitForElementVisibility(this.alert)
  }
  viewAlertPassword() {
    Helper.waitForElementVisibility(this.alertPassword)
  }
  viewAlertConfirm() {
    Helper.waitForElementVisibility(this.alertConfirm)
  }
  viewAlertConfirmURA() {
    Helper.waitForElementVisibility(this.alertConfirmURA)
  }
}
module.exports = Text