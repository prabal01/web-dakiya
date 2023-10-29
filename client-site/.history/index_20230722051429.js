console.log("started")
// const webDakiyaScript = document.getElementById("webDakiya");
// console.log("🚀 ~ file: index.js:3 ~ webDakiyaScript:", webDakiyaScript)

// webDakiyaScript?.onload()
// const script = document.createElement('script')

const Webdakiya = window.Webdakiya
if (Webdakiya) {
    
    if (Webdakiya.canAskPermission() ) {
        if (!Webdakiya.havePermission()) {
            if (Webdakiya.canAskPermission() ) {
                console.log(Webdakiya)
                Webdakiya.askPermission();
                const sw = Webdakiya.registerServiceWorker('./sw.js')
                sw.then(register => {
                    register.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey:urlBase64ToUint8Array(
                            "BFKu-4JatVNtbxQxLyfA8bXoCCSP-RYuhxVAXZkbEYIt-r15Nn07uh2xV_6OfmazXY2RlMIvJ3Ci4WSI-bpiZlg"),
                    }).then(sub=>console.log(sub));
                }).catch(e=>console.log(e))
                console.log("🚀 ~ file: index.js:17 ~ sw:", sw)


                
            } else {
                console.log("Can't get permission")
            }        
        }

    } else {
        throw new Error("can not ask permission")
    }
} 
// Webdakiya.askpermission