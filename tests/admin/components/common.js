'use strict'
const Helper = require('protractor-helper')
const data = require('../jsonfiles/global.json')

class Common {
  constructor() {
    // ===> Campos
    this._fieldCpf = element(by.id('cpf'))
    this._fieldFullName = element(by.id('name'))
    this._fieldCellPhone = element(by.id('cellphone'))
    this._fieldEmail = element(by.id('email'))
    this._fieldEmailAddress = element(by.id('emailAddress'))
    this._fieldEmailAddressConfirm = element(by.id('emailAddressConfirmation'))
    this._filedNewPassword = element(by.id('password'))
    this._filedConfirmPassword = element(by.id('confirmPassword'))
    this._filedPasswordConfirm = element(by.id('passwordConfirmation'))

    // ===> Botões
    this._buttonContinue = element(by.id('btnContinue'))
    this._buttonChangeMyPassword = element(by.id('btnContinuar'))
    this._buttonSendPassword = element.all(by.css('.col-12.col-md-12.txt-center.mt-2.px-3 [type="button"]')).get(0)
    this._buttonEntrar = element.all(by.css('.col-12.col-md-12.txt-center.mt-2.px-3')).get(0)
    this._buttonContinuePassword = element.all(by.css('.col-12.col-md-12.txt-center.mt-2.px-3')).get(1)
    this._viewPassword = element(by.css('.icon.icon_view.pointer'))
    this._buttonLogIn = element(by.css('.row [type="submit"]'))
    this._menu = element(by.css('.col-1.d-none.d-lg-block.profile-dropdown'))
    this._optionLogout = element(by.css('.col [href="/auth/logout"]'))
    this._optionChange = element(by.css('.col [href="/my-account/ura-password"]'))
    this._menuMobile = element(by.css('.icon.undefined.icon.icon_profile.color-brand-5'))
    this._optionLogoutMobile = element(by.css('.col.py-0.px-0.pl-half.ml-1'))
  }

  get fieldCpf() {
    return this._fieldCpf
  };
  get fieldFullName() {
    return this._fieldFullName
  };
  get fieldCellPhone() {
    return this._fieldCellPhone
  };
  get fieldEmail() {
    return this._fieldEmail
  };
  get fieldEmailAddress() {
    return this._fieldEmailAddress
  };
  get fieldEmailAddressConfirm() {
    return this._fieldEmailAddressConfirm
  };
  get filedNewPassword() {
    return this._filedNewPassword
  };
  get filedConfirmPassword() {
    return this._filedConfirmPassword
  };
  get filedPasswordConfirm() {
    return this._filedPasswordConfirm
  };
  get btnContinue() {
    return this._buttonContinue
  }
  get buttonSendPassword() {
    return this._buttonSendPassword
  }
  get buttonEntrar() {
    return this._buttonEntrar
  }
  get buttonContinuePassword() {
    return this._buttonContinuePassword
  }
  get viewPassword() {
    return this._viewPassword
  }
  get buttonLogIn() {
    return this._buttonLogIn
  }
  get menu() {
    return this._menu
  }
  get menuMobile() {
    return this._menuMobile
  }
  get optionLogout() {
    return this._optionLogout
  }
  get optionChange() {
    return this._optionChange
  }
  get optionLogoutMobile() {
    return this._optionLogoutMobile
  }
  get buttonChangeMyPassword() {
    return this._buttonChangeMyPassword
  }

  clickButtonSendPassword() {
    Helper.click(this.buttonSendPassword)
  }
  clickButtonContinuePassword() {
    Helper.click(this.buttonContinuePassword)
  }
  clickViewPassword() {
    Helper.click(this.viewPassword)
  }
  clickLogIn() {
    Helper.click(this.buttonLogIn)
  }
  fillPassword() {
    Helper.fillFieldWithText(this.filedNewPassword, data.creadentials.pass)
    Helper.click(this.buttonSendPassword)
  }
  fillFieldPassword() {
    Helper.fillFieldWithText(this.filedNewPassword, data.creadentials.password)
    Helper.fillFieldWithText(this.filedConfirmPassword, data.creadentials.password)
    Helper.click(this.buttonLogIn)
  }
  fillFieldPasswordFirstAccess() {
    Helper.fillFieldWithText(this.filedNewPassword, data.creadentials.password)
    Helper.fillFieldWithText(this.filedPasswordConfirm, data.creadentials.password)
    // Helper.click(this.btnContinue)
  }
  clickOptionChange() {
    Helper.click(this.menu)
    Helper.click(this.optionChange)
  }
  clickLogout() {
    Helper.click(this.menu)
    Helper.click(this.optionLogout)
  }
  clickLogoutMobile() {
    Helper.click(this.menuMobile)
    Helper.click(this.optionLogoutMobile)
  }
  clickBtnChangeMyPassword() {
    Helper.click(this.buttonChangeMyPassword)
  }
}
module.exports = Common