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
    "endpoint": "https://fcm.googleapis.com/fcm/send/edvbSWF7oZQ:APA91bEmd4POc_5v9YXzcwS2TRhouUdLjBxA4U6JLqk7EQhvdzjHo0b_iaYiTE_f4FSs08Rp_bVMEL1tACaCOsT9bN8bpSiq6hd4EYmpnN4UmVWkTkz5nR4n5Jcf91IEGIvarsXZf6lz",
    "expirationTime": null,
    "keys": {
        "p256dh": "BDLT98X6gGDpnKD7tgk4gFYLZNy2UB0y1aetqLi3yvyxSndkC2-l_B2uIWhTHkfHtllj6JevZd4qTvJEc02361E",
        "auth": "8EY6vzLvTY-owusfV_KWnQ"
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