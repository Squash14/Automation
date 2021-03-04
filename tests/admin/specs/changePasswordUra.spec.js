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

    it('should I validation change password', () => {
        browser.get(auth.relativeUrl)
        auth.login.cpfChange()
        auth.login.fillPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
        option.changePasswordURA.clickOptionChange()
        option.changePasswordURA.requestTokenEmail()
        browser.wait(browser.params.getLastEmail()).then((codeChange) => {
            element(by.id("txt-token-confirm")).sendKeys(codeChange)
            element.all(by.css(".btn.btn-sm.btn-featured.border.border-color-ui-3.mr-1")).get(0).click()
        })
        register.password.sequenceOfTheSameNumber()
        validation.message.passwordMessageDoesNotFollowRequirements()
        expect(validation.message.passwordMessage.getText()).toEqual('Ops! Senha não segue os requisitos informados.')
        register.password.partOfBirthDate()
        register.password.increasingSequentialNumbers()
        register.password.decreasingSequentialNumbers()
        register.password.successfully()
        validation.text.viewAlertConfirmURA()
        expect(validation.text.alertConfirmURA.getText()).toEqual('Alterar senha de acesso a URA')
        register.password.successfully()
    })
})