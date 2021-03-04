module.exports.config = require("./protractor.conf")({
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'mobileEmulation': {
                'deviceName': 'iPhone X'
            }
        }
    }
});