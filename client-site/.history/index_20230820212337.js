function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const test = ()=>{
const Webdakiya = window.Webdakiya
if (Webdakiya) {
    
    if (Webdakiya.canAskPermission() ) {
        if (!Webdakiya.havePermission()) {
            if (Webdakiya.canAskPermission() ) {
                console.log(Webdakiya)
                Webdakiya.askPermission();
                 Webdakiya.registerService('./sw.js')


                
            } else {
                console.log("Can't get permission")
            }        
        }

    } else {
        throw new Error("can not ask permission")
    }
} 
// Webdakiya.askpermission
}