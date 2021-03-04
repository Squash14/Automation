'use strict'
const Helper = require('protractor-helper')

const Authentication = require('../page-objects/authentication')
const data = require('../jsonfiles/global.json')

xdescribe('smoke tests', () => {
    const authentication = new Authentication()

    beforeEach(() => {
        browser.get(authentication.relativeUrl)
    })

    // it('should I validation I want help creating my account.', () => {
    //     browser.get(authentication.relativeUrl)
    //     authentication.help.myAccount()
    //     browser.getAllWindowHandles().then(function (handles) {
    //         browser.switchTo().window(handles[1])
    //         Helper.waitForUrlToBeEqualToExpectedUrl(data.url.zendesk)
    //     })
    // });

    it('should I validation first access PSP', () => {
        // browser.get(authentication.relativeUrl)
        authentication.login.whatIsYourCPFPSP()
        authentication.login.clickButtonSendPassword()
        browser.wait(browser.params.getLastEmail()).then((regCode) => {
            // browser.getAllWindowHandles().then(function (handles) {
            // browser.switchTo().window(handles[0])
            authentication.login.clickButtonContinuePassword()
            element(by.id("password")).sendKeys(regCode)
            authentication.login.clickViewPassword()
            // })
        })
        authentication.login.clickLogIn()
        authentication.login.fillFieldPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
        // authentication.login.clickLogout()
    })

    it('should I validation first access NPSP', () => {
        // browser.get(authentication.relativeUrl)
        authentication.login.whatIsYourCPFNPSP()
        authentication.register.fillFieldNPSP()
        browser.wait(browser.params.getLastEmail()).then((regCode) => {
            // browser.getAllWindowHandles().then(function (handles) {
            // browser.switchTo().window(handles[0])
            browser.get(regCode)
            // })
        })
        authentication.register.clickButtonIUPP()
        authentication.login.fillPassword()
        Helper.waitForUrlToBeEqualToExpectedUrl(data.url.semprepresente)
    })
});