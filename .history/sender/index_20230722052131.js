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
    "endpoint": "https://fcm.googleapis.com/fcm/send/c9mFFKLIv5s:APA91bGm5aBXFg8I9o52X1XtIwHO31gYTnqNutNsgrtwe_-L3wyEy37R4RsQ1ahfY_a6XRVM0maWdz_o6U9tHhzQs4IECSAIgYP8PtEPA4hOB95_GTqCPVKj4YjPv11CdyHwwKGjyVhF",
    "expirationTime": null,
    "keys": {
        "p256dh": "BFO4LmjdvlYlSYF8KMJsKyi4IIxLWNoohoAm3i1kFVFc07fwwJWJCpoQM4AsSRi2w0GTQzbj3T8tVU1mmky-k9o",
        "auth": "ZZlGdzVkewmZPHzRcN8Tbw"
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