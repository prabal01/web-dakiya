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
    "endpoint": "https://fcm.googleapis.com/fcm/send/e48W6o-2hOI:APA91bFRz9pNVQ3yc-QLtMjOEo_eNQ48pP_uOzlUm4udeDg8fqzB-1wfKLRJt0s2hM_75Vao6__FoHic7WW2JNfXoXridwoeRX80TzAE5f0OSdCo7Mtg8OOsh5Ycw0KTfsToJdFH5Xen",
    "expirationTime": null,
    "keys": {
        "p256dh": "BMBxLwHZPuusd8u-ekniqzDk2GpwwEZrS7WyDV-fBghLuyJWszE0hSB3Wf2LAkFRncqNEuEodzIJStYCgm7csx4",
        "auth": "ThQi9dWTEqwjxjv8Y7DoCg"
    }
}
const triggerPushMsg = function (subscription, dataToSend) {
    return webpush.sendNotification(subscription, dataToSend).catch((err) => {
      if (err.statusCode === 404 || err.statusCode === 410) {
        console.log('Subscription has expired or is no longer valid: ', err);
        return deleteSubscriptionFromDatabase(subscription._id);
      } else {
        throw err;
      }
    });
};
  
triggerPushMsg(sub,"Hello world")