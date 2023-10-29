const webpush = require('web-push');

// VAPID keys should be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:sprabal01@gmail.com',
  "BFKu-4JatVNtbxQxLyfA8bXoCCSP-RYuhxVAXZkbEYIt-r15Nn07uh2xV_6OfmazXY2RlMIvJ3Ci4WSI-bpiZlg",
  "ZWhDbsYYI0J9HvnO_UrXlcrGISCLlthR_JmLvyJG7EQ"
);


const sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dH3L0fh-Eh4:APA91bGfnT19I2GsRWST5Ay2FGYpsW6GSYPghhBYyeXXbqEJ1z0JCvS2XhNWLnsrzcu7Ls2XTdGYv2Q6t0uN8grmDuka4w1Dayr8u_TkZGg2avPt5zhWQCBG7-P1WXgvwt5vRPVl30sM",
    "expirationTime": null,
    "keys": {
        "p256dh": "BAzYD86KcpklGMr0v376ykjq_WzwsPd5ftL5DJoa_J75XzINob7pu9jtnkxLfKgos8_NajLl_spNcox_xBFx_MA",
        "auth": "QN4uioWkODOg-OT4Ga9JKA"
    }
}
const triggerPushMsg = function (subscription, dataToSend) {
    return webpush.sendNotification(subscription, dataToSend).catch((err) => {
      if (err.statusCode === 404 || err.statusCode === 410) {
        console.log('Subscription has expired or is no longer valid: ', err);
        // return deleteSubscriptionFromDatabase(subscription._id);
      } else {
        throw err;
      }
    });
};
  
triggerPushMsg(sub,"Hello world")