'use strict'
const FooterComponent = require('../components/validation/footer')
const MessageComponent = require('../components/validation/message')
const TextComponent = require('../components/validation/text')

class Validation {
  constructor() {
    this.footer = new FooterComponent()
    this.message = new MessageComponent()
    this.text = new TextComponent()
  }
}

module.exports = Validation