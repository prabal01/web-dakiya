const webpush = require('web-push');

// VAPID keys should be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:sprabal01@gmail.com',
  "BFKu-4JatVNtbxQxLyfA8bXoCCSP-RYuhxVAXZkbEYIt-r15Nn07uh2xV_6OfmazXY2RlMIvJ3Ci4WSI-bpiZlg",
  "ZWhDbsYYI0J9HvnO_UrXlcrGISCLlthR_JmLvyJG7EQ"
);