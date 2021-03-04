const AllureReporter = require('jasmine-allure-reporter')
const SpecReporter = require("jasmine-spec-reporter").SpecReporter

module.exports = (providedConfig) => {
    const defaultConfig = {
        directConnect: true,
        baseUrl: "https://semprepresente-qa2.webpremios.digital/",
        specs: ["../itau-iupp-automation-tests/tests/admin/specs/*.spec.js"],
        jasmineNodeOpts: {
            showColors: true,
            silent: true,
            defaultTimeoutInterval: 600000,
            includeStackTrace: false,
            print: function () {}
        },
        // highlightDelay: 1000,
        onPrepare: () => {
            browser.waitForAngularEnabled(false)
            browser.manage().window().maximize()
            jasmine.getEnv().addReporter(new SpecReporter({
                spec: {
                    displayFailed: true,
                    displayPending: true,
                    displayErrorMessages: true,
                    displayDuration: true,
                    displayStacktrace: true,
                },
                summary: {
                    displayFailed: true,
                }
            }))
            jasmine.getEnv().addReporter(new AllureReporter())
            jasmine.getEnv().afterEach((done) => {
                browser.takeScreenshot().then((png) => {
                    allure.createAttachment('Screenshot', () => {
                        return new Buffer.from(png, 'base64')
                    }, 'image/png')()
                    done()
                })
            })
            let MailListener = require("mail-listener2");
            let emailDate = new Date().getTime();
            let mailListener = new MailListener({
                username: "rafael.santos@ltmfidelidade.com.br",
                password: "Danyl@354986",
                host: "outlook.office365.com",
                port: 993,
                tls: true,
                tlsOptions: {
                    rejectUnauthorized: false
                },
                mailbox: "INBOX",
                markSeen: true,
                fetchUnreadOnStart: false,
                searchFilter: ["NEW", "UNSEEN", ["SINCE", emailDate]],
                //debug: console.log, Debugar acesso ao email
            })

            // mailListener.on("server:connected", function () {
            //     console.log("Mail listener initialized")
            // })
            // mailListener.on("server:disconnected", function () {
            //     console.log("Mail listener finished")
            // })

            global.mailListener = mailListener
            mailListener.start() // start listening

            setTimeout(function () {
                mailListener.stop() // start listening
            }, 90 * 1000)
        },
        params: {
            getLastEmail: function () {
                const deferred = protractor.promise.defer()
                // console.log("Waiting for email...")

                var count = 0
                mailListener.on("mail", function (mail) {
                    var i = ++count
                    if (i > 1) {
                        mailListener.stop(); // start listening
                        return
                    }
                    //console.log('email: ', JSON.stringify(mail, null, 2));
                    if (mail.subject === 'reset') {
                        var pattern = /(<b.*>([0-9]{6})<\/b>)/g
                        var regCode = pattern.exec(mail.html)[2]
                        deferred.fulfill(regCode)
                        // console.log(regCode) 
                    } else if (mail.subject === 'Autorização da sua atualização cadastral') {
                        var pattern = /(<b.*>([0-9]{6})<\/b>)/g
                        var codeFirst = pattern.exec(mail.html)[2]
                        deferred.fulfill(codeFirst)
                        // console.log(codeFirst) 
                    } else if (mail.subject === 'Bem Vindo ao IUPP') {
                        var pattern = /(\>([\w\d\!\@\#\$\%\¨\&\*\(\)\_\-\+\=\^\~\:\;\.\{\[\}\]]{8})\<)/g
                        var token = pattern.exec(mail.html)[2]
                        deferred.fulfill(token)
                        //console.log(token)
                    } else if (mail.subject === 'Your verification code') {
                        var pattern = /(\b\d{6}\b)/g
                        var codeChange = pattern.exec(mail.html)[1]
                        deferred.fulfill(codeChange)
                        //console.log(codeChange)
                    } else if (mail.subject === 'IUPP - Confirmação de Cadastro') {
                        var pattern = /(<a[^>]+href=\"(.*?)\"[^>]*>.*?<\/a>)/g
                        var regCode = pattern.exec(mail.html)[2]
                        deferred.fulfill(regCode.replace(/&amp;/g, '&'))
                    } else throw new Error("Titulo de email desconhecido")
                })
                return deferred.promise
            }
        }
    }
    return Object.assign({},
        defaultConfig,
        providedConfig
    )
}