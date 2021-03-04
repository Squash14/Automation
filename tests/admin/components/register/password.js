'use strict'
const Helper = require('protractor-helper')

const Common = require('../common')
const data = require('../../jsonfiles/global.json')

class Password extends Common {
  constructor() {
    super()
    this._numberOne = element.all(by.css('.col-4.txt-center.mt-2')).get(0)
    this._numberTwo = element.all(by.css('.col-4.txt-center.mt-2')).get(1)
    this._numberThree = element.all(by.css('.col-4.txt-center.mt-2')).get(2)
    this._numberFour = element.all(by.css('.col-4.txt-center.mt-2')).get(3)
    this._numberFive = element.all(by.css('.col-4.txt-center.mt-2')).get(4)
    this._numberSix = element.all(by.css('.col-4.txt-center.mt-2')).get(5)
    this._numberSeven = element.all(by.css('.col-4.txt-center.mt-2')).get(6)
    this._numberEight = element.all(by.css('.col-4.txt-center.mt-2')).get(7)
    this._numberNine = element.all(by.css('.col-4.txt-center.mt-2')).get(8)
    this._buttonBack = element.all(by.css('.col-4.txt-center.mt-2')).get(9)
    this._numberZero = element.all(by.css('.col-4.txt-center.mt-2')).get(10)
    this._buttoNext = element.all(by.css('.col-4.txt-center.mt-2')).get(11)
  }

  get one() {
    return this._numberOne
  }
  get two() {
    return this._numberTwo
  }
  get three() {
    return this._numberThree
  }
  get four() {
    return this._numberFour
  }
  get five() {
    return this._numberFive
  }
  get six() {
    return this._numberSix
  }
  get seven() {
    return this._numberSeven
  }
  get eight() {
    return this._numberEight
  }
  get nine() {
    return this._numberNine
  }
  get zero() {
    return this._numberZero
  }
  get zero() {
    return this._numberZero
  }
  get buttonBack() {
    return this._buttonBack
  }
  get buttoNext() {
    return this._buttoNext
  }

  sequenceOfTheSameNumber() {
    Helper.click(this.two)
    Helper.click(this.two)
    Helper.click(this.two)
    Helper.click(this.two)
    Helper.click(this.two)
    Helper.click(this.two)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
  partOfTheCPF() {
    Helper.click(this.buttonBack)
    Helper.click(this.nine)
    Helper.click(this.one)
    Helper.click(this.seven)
    Helper.click(this.one)
    Helper.click(this.two)
    Helper.click(this.three)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
  partOfBirthDate() {
    Helper.click(this.buttonBack)
    Helper.click(this.one)
    Helper.click(this.four)
    Helper.click(this.zero)
    Helper.click(this.four)
    Helper.click(this.eight)
    Helper.click(this.four)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
  increasingSequentialNumbers() {
    Helper.click(this.buttonBack)
    Helper.click(this.one)
    Helper.click(this.two)
    Helper.click(this.three)
    Helper.click(this.four)
    Helper.click(this.five)
    Helper.click(this.six)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
  decreasingSequentialNumbers() {
    Helper.click(this.buttonBack)
    Helper.click(this.six)
    Helper.click(this.five)
    Helper.click(this.four)
    Helper.click(this.three)
    Helper.click(this.two)
    Helper.click(this.one)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
  successfully() {
    Helper.click(this.buttonBack)
    Helper.click(this.three)
    Helper.click(this.five)
    Helper.click(this.four)
    Helper.click(this.nine)
    Helper.click(this.eight)
    Helper.click(this.six)
    Helper.click(this.buttoNext)
    browser.sleep(900)
  }
}
module.exports = Password