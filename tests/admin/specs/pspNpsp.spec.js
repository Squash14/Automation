'use strict'
const Helper = require('protractor-helper')

const Authentication = require('../page-objects/authentication')
const data = require('../jsonfiles/global.json')

xdescribe('smoke tests', () => {
    const authentication = new Authentication()

    it('should I validation first access PSP', () => {
        browser.get(authentication.relativeUrl)
        authentication.login.whatIsYourCPFPSP()
        authentication.login.clickButtonSendPassword()
        browser.wait(browser.params.getLastEmail()).then((token) => {
            authentication.login.clickButtonContinuePassword()
            element(by.id("password")).sendKeys(token)
            authentication.login.clickViewPassword()
        })
        authentication.login.clickLogIn()
        authentication.login.fillFieldPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
        authentication.login.clickLogout()
        // authentication.login.clickLogoutMobile()
    })

    it('should I validation first access NPSP', () => {
        authentication.login.whatIsYourCPFNPSP()
        authentication.register.fillFieldNPSP()
        browser.wait(browser.params.getLastEmail()).then((regCode) => {
            browser.get(regCode)
        })
        authentication.register.clickButtonIUPP()
        authentication.login.fillPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
    })
})