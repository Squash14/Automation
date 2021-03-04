'use strict'
const Helper = require('protractor-helper');
const Common = require('../common');

class Footer extends Common {
  constructor() {
    super()
    this._footer = element(by.css('.links.col-12.px-0.py-3'));
  };

  get footer() {
    return this._footer;
  };

  waitForFooter() {
    Helper.waitForElementVisibility(this.footer);
  };
};
module.exports = Footer;