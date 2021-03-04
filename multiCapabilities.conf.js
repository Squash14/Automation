module.exports.config = require("./protractor.conf")({
    multiCapabilities: [{
            'browserName': 'chrome'
        },
        {
            'browserName': 'firefox'
        },
        {
            'browserName': 'chrome',
            'chromeOptions': {
                'mobileEmulation': {
                    'deviceName': 'iPhone X'
                }
            }
        }
    ],
    maxSessions: 2
});