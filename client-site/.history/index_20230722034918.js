console.log("started")
const webDakiyaScript = document.getElementById("webDakiya");
// console.log("🚀 ~ file: index.js:3 ~ webDakiyaScript:", webDakiyaScript)

// webDakiyaScript?.onload()

const isScriptLoaded = ( ) => {
    if (Window.Webdakiya) {
        console.log("script loaded")
    } else isScriptLoaded()
}
isScriptLoaded()