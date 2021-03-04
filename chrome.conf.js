module.exports.config = require("./protractor.conf")({
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                //"--headless"
            ]
        },
        "goog:chromeOptions": {
            "excludeSwitches": ["enable-automation"],
            "useAutomationExtension": false
        }
    }
});