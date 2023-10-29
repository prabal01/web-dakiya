exports.template = {
  serviceWorker: () => {
    return `
    console.log('hello')
    self.addEventListener('push', function(event) {
      console.log("got message")
      self.registration.pushManager.getSubscription().then(function(subscription) {
        console.log(subscription);
      })
      if (event.data) {
      console.log('This push event has data: ', event.data.text());
      } else {
      console.log('This push event has no data.');
      }

      const promiseChain = self.registration.showNotification(event.data.text());

      event.waitUntil(promiseChain);
  });`;
  },
  initScript: () => {
    return `
    window.Webdakiya = {
    //check if the webdakiya script is  available
    isScriptLoaded : ()=>{
        return (typeof(Webdakiya)!== 'undefined');
    },
    // register the service worker
    registerServiceWorker: (swName) =>  {
        return navigator.serviceWorker
          .register(swName)
          .then(function (registration) {
            console.log('Service worker successfully registered.');
            return registration;
          })
          .catch(function (err) {
            console.error('Unable to register service worker.', err);
          });
      },
      askPermission: async ()=>{
        console.log("asking permission")
        const permissionResult_1 = await new Promise(function (resolve, reject) {
              const permissionResult = Notification.requestPermission(function (result) {
                  resolve(result);
              });

              if (permissionResult) {
                  permissionResult.then(resolve, reject);
              }
          });
          if (permissionResult_1 !== 'granted') {
              throw new Error("We weren't granted permission.");
          }
      },
      havePermission : ()=>{
          return Notification.permission === 'granted';
      },
      canAskPermission: ()=>{
          return Notification.permission === 'granted' || Notification.permission === 'default';
      },
      // check if the browser supports notifications
      isNotificationsSupported: ()=>{
        return ('PushManager' in window) && ('serviceWorker' in navigator)
    }
      
}
console.log("loaded!!!")
`;
  },
};
