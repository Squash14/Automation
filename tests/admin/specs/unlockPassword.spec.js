'use strict'
const Helper = require('protractor-helper')

const Authentication = require('../page-objects/authentication')
const Option = require('../page-objects/option')
const Register = require('../page-objects/registerPassword')
const Validation = require('../page-objects/validation')
const data = require('../jsonfiles/global.json')

xdescribe('smoke tests', () => {
    const auth = new Authentication()
    const option = new Option()
    const register = new Register()
    const validation = new Validation()

    beforeEach(() => {
        Helper.setTimeout(30000)
    })

    it('should I validation unlocking the password', () => {
        browser.get(auth.relativeUrl)
        auth.login.cpfUnlock()
        auth.login.fillPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
        option.changePasswordURA.clickOptionChange()
        option.changePasswordURA.requestTokenSMS()
        browser.executeScript("window.open('https://app.mysms.com/#login')")
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1])
            auth.login.clickGmail()
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2])
                auth.login.gmail()
                browser.switchTo().window(handles[1])
                var codSmsElement = element(by.css(".bubble .message"))
                codSmsElement.getText().then(t => {
                    var codSms = /\d+/gi.exec(t)[0]
                    browser.switchTo().window(handles[0])
                    element(by.id("txt-token-confirm")).sendKeys(codSms)
                    element.all(by.css(".btn.btn-sm.btn-featured.border.border-color-ui-3.mr-1")).get(0).click()
                    auth.help.clickBtnChangeMyPassword()
                })
            })
        })
        option.changePasswordURA.requestTokenEmail()
        browser.wait(browser.params.getLastEmail()).then((codeChange) => {
            element(by.id("txt-token-confirm")).sendKeys(codeChange)
            element.all(by.css(".btn.btn-sm.btn-featured.border.border-color-ui-3.mr-1")).get(0).click()
        })
        register.password.successfully()
        validation.text.viewAlertConfirmURA()
        expect(validation.text.alertConfirmURA.getText()).toEqual('Alterar senha de acesso a URA')
        register.password.successfully()
    })
})