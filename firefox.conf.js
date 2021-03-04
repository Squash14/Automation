module.exports.config = require("./protractor.conf")({
    capabilities: {
        browserName: "firefox",
        "marionette": true,
        "moz:firefoxOptions": {
            //"args": ["--headless"]
        }
    }
});