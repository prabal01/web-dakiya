console.log("started")
// const webDakiyaScript = document.getElementById("webDakiya");
// console.log("🚀 ~ file: index.js:3 ~ webDakiyaScript:", webDakiyaScript)

// webDakiyaScript?.onload()
// const script = document.createElement('script')

const Webdakiya = window.Webdakiya
if (Webdakiya) {
    if (!Webdakiya.havePermission) {
        if (Webdakiya.canAskPermission() ) {
            console.log("permission can be asked")
            console.log(Webdakiya)
            // Webdakiya.askPermission();
        } else {
            console.log("can't get permission")
        }        
    }
    if (Webdakiya.canAskPermission() ) {
        console.log("permission can be asked")

    } else {
        console.log("can't get permission")
    }
} 
// Webdakiya.askpermission