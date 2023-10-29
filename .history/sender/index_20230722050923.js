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
    "endpoint": "https://fcm.googleapis.com/fcm/send/c0sG_9wqvEU:APA91bFodcpL1fIQWfvSi6E74aP9HV4RWs8LTX1PlCOKnABEIJxU4QcLCXGjCFdfa0LqtU1Nd4SI-eE2tGL8Dhe-y4R9FkJynlBlAspxher91MTDpGTaKwNhCsX6uvbxHHQQMMO-aDS2",
    "expirationTime": null,
    "keys": {
        "p256dh": "BKn2rWLywGBvD8yHbbR__mTMplorvVI0NRo89BZqBYiauXSyfmpzDtTJpWlaf1Q8xdWYoSqJi7aCXhgRNsrZUkM",
        "auth": "7P91_aJD-Ybh3pH0-nLuQA"
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