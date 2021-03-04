'use strict'

const Authentication = require('../page-objects/authentication')
const Validation = require('../page-objects/validation')

xdescribe('smoke tests', () => {
    const authentication = new Authentication()
    const validation = new Validation()

    it('given I login in', () => {
        // const data = {
        //     userName: '24988456072',
        //     password: 'ysMm#h-3'
        // }

        // browser.get(authentication.relativeUrl)
        // authentication.login.whatIsYourCPF(data)
        // authentication.login.fillPassword(data)
        // // validation.message.nowEnterYourPassword()
        // // expect(validation.message.alert.getText()).toEqual('Agora digite a sua senha')

        // authentication.login.clickLogout()
        // browser.sleep(90000)

        const data = {
            userName: '72617088014',
            name: 'Isabela Allana',
            cell: '(61) 98222-9350',
            emailAddress: 'rafael.santos@ltmfidelidade.com.br',
            password: 'ysMm#h-3'
        }

        browser.get(authentication.relativeUrl)
        authentication.login.whatIsYourCPF(data)
        authentication.register.fillFieldNPSP(data)
        browser.wait(browser.params.getLastEmail()).then((regCode) => {
            //browser.executeScript("window.open('https://www.google.com.br/')")
            // browser.getAllWindowHandles().then(function (handles) {
            //     browser.switchTo().window(handles[1])
            browser.get(regCode)
            // })
        });

        browser.sleep(900000)
    })
})