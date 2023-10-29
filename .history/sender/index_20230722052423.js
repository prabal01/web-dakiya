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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fEau21jhYRo:APA91bGxJWF_YfJ-eLEpccWH-VjIREOWNAggi5Br7B9qybBuBhmAS-oPz8HrHWsolir07rCJ8RFFprQ0Ynpw-Dm3HEfkeawRMmUtUEGoPwgkf5pEe5OevxJqHyS18VlSZmhIMvwBHUUV",
    "expirationTime": null,
    "keys": {
        "p256dh": "BF4wMWXrrC5ucc3IIG5wasB9bCMFC3Zp-OixVJoORMHs3-QCQxx6QUKjNjt6fXZ2Xkha78zs2Z-GMYX53a3w8QY",
        "auth": "dvxcs_ADUd7rFeBJWZqwRw"
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