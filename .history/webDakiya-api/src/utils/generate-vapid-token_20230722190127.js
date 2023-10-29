const webpush = require("web-push")
exports.genetateVapidKeys = () => {
    return webpush.generateVAPIDKeys()
}