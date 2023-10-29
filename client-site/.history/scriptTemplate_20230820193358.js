
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
            let options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(registration)
              }
            fetch('http://localhost:4444/subscribe', options)
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
