'use strict'
const Helper = require('protractor-helper')

const Common = require('../common')

class Help extends Common {
  constructor() {
    super()
    this._optionIWantHelp = element(by.css('.col.txt-left.txt-body-sm'))
  }

  get optionIWantHelp() {
    return this._optionIWantHelp
  }

  myAccount() {
    Helper.click(this.optionIWantHelp)
  }
}
module.exports = Help