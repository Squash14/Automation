'use strict'
const Helper = require('protractor-helper')

class Message {
  constructor() {
    this._alert = element.all(by.css('.txt-body-sm.mb-1')).get(1)
    this._alert3 = element(by.css('.header'))
    this._passwordMessage = element(by.css('.color-error.txt-circular-book.txt-body-lg'))
  }

  get alert() {
    return this._alert
  }
  get alert3() {
    return this._alert3
  }
  get passwordMessage() {
    return this._passwordMessage
  }

  viewAlert3() {
    Helper.waitForElementVisibility(this.alert3)
  }
  nowEnterYourPassword() {
    Helper.waitForElementVisibility(this.alert)
  }
  passwordMessageDoesNotFollowRequirements() {
    Helper.waitForElementVisibility(this.passwordMessage)
  }
}
module.exports = Message