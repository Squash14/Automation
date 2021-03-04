'use strict'
const Helper = require('protractor-helper')

const Authentication = require('../page-objects/authentication')
const Register = require('../page-objects/registerPassword')
const Validation = require('../page-objects/validation')
const data = require('../jsonfiles/global.json')

xdescribe('smoke tests', () => {
    const auth = new Authentication()
    const register = new Register()
    const validation = new Validation()

    beforeEach(() => {
        Helper.setTimeout(30000)
    })

    it('should I validation 6 digit password registration', () => {
        browser.get(auth.relativeUrl)
        auth.login.cpfLegacy()
        auth.login.fillPassword()
        register.password.sequenceOfTheSameNumber()
        validation.text.viewAlertPassword()
        expect(validation.text.alertPassword.getText()).toEqual('Senha não segue os requisitos informados acima.')
        register.password.partOfTheCPF()
        expect(validation.text.alertPassword.getText()).toEqual('Senha não segue os requisitos informados acima.')
        register.password.partOfBirthDate()
        expect(validation.text.alertPassword.getText()).toEqual('Senha não segue os requisitos informados acima.')
        register.password.increasingSequentialNumbers()
        expect(validation.text.alertPassword.getText()).toEqual('Senha não segue os requisitos informados acima.')
        register.password.decreasingSequentialNumbers()
        expect(validation.text.alertPassword.getText()).toEqual('Senha não segue os requisitos informados acima.')
        register.password.successfully()
        validation.text.viewAlertConfirm()
        expect(validation.text.alertConfirm.getText()).toEqual('Confirme a senha numérica')
        register.password.successfully()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
    })
})