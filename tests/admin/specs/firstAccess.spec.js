'use strict'
const Helper = require('protractor-helper')

const Authentication = require('../page-objects/authentication')
const Validation = require('../page-objects/validation')
const Register = require('../page-objects/registerPassword')

xdescribe('first access tests', () => {
    const authentication = new Authentication()
    const validation = new Validation()
    const register = new Register()

    beforeEach(() => {
        Helper.setTimeout(30000)
    })

    it('should I validation first access', () => {
        browser.get(authentication.relativeUrl)
        authentication.login.createAnAnccout()
        validation.text.waitForText()
        expect(validation.text.alert.getText()).toEqual('Informe o seu CPF para prosseguir.')
        authentication.login.cpfFirstAccess()
        authentication.login.fillInPersonalDetails()
        browser.wait(browser.params.getLastEmail()).then((codeFirst) => {
            element(by.id("emailToken")).sendKeys(codeFirst)
            element(by.id("btnContinue")).click()
        })
        browser.executeScript("window.open('https://app.mysms.com/#login')")
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1])
            authentication.login.clickGmail()
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2])
                authentication.login.gmail()
                browser.switchTo().window(handles[1])
                var codSmsElement = element(by.css(".bubble .message"))
                codSmsElement.getText().then(t => {
                    // console.log('get text ' + t)
                    // console.log('regex', /\d+/gi.exec(t))
                    var codSms = /\d+/gi.exec(t)[0]
                    // console.log('codSms', codSms)
                    browser.switchTo().window(handles[0])
                    browser.sleep(8000)
                    element(by.id("cellphoneToken")).sendKeys(codSms)
                    element(by.id("btnContinue")).click()
                    register.password.successfully()
                    validation.text.viewAlertConfirm()
                    expect(validation.text.alertConfirm.getText()).toEqual('Confirme sua senha')
                    register.password.successfully()
                    register.password.fillFieldPasswordFirstAccess()
                    browser.sleep(100000)
                })
            })
        })
    })
})