LogWriteInfo("Starting Task: system/process/SuperDApp-launcher.js")
LogWriteInfo("initalizing SuperDApp executor")
function execSuperDApp(content) {
 LogWriteInfo("Starting SuperDApp " + content)
 var manifest = JSON.parse(atob(content))
 if(manifest.window.exsists == true) {
  LogWriteInfo("Creating SuperDApp Window")
  var App = document.createElement("div")
  var AppTitle = document.createElement("h3")
  App.class = "window"
  App.style.width = "600px";
  App.style.height = "500px";
  App.style.backgroundColor = "#fff";
  App.style.border = "1px solid #ccc";
  App.style.position = "absolute";
  App.style.top = "100px";
  App.style.left = "100px";
  App.style.cursor = "move";
  AppTitle.innerHTML = manifest.name;
  App.id = manifest.name
  LogWriteInfo("Initalizing SuperDApp Window Content")
  if(manifest.window.type == "iframe") {
   var AppFrame = document.createElement("iframe")
   AppTitle.InnerHTML = manifest.name
   App.appendChild(AppTitle)
   App.appendChild(AppFrame)
   AppFrame.src = manifest.window.url
   AppFrame.width = "600"
   AppFrame.height = "500"
   document.getElementById("Apps").appendChild(App)
   makeDraggable(App)
  }
  if(manifest.window.type == "html") {
   var AppFrame = document.createElement("iframe")
   AppTitle.InnerHTML = manifest.name
   App.appendChild(AppTitle)
   App.appendChild(AppFrame)
   AppFrame.srcdoc = manifest.window.html
   AppFrame.width = "600"
   AppFrame.height = "500"
   document.getElementById("Apps").appendChild(App)
   makeDraggable(App)
  }
 }
 LogWriteInfo("Executing SuperDApp main code")
 eval(manifest.code)
}
LogWriteInfo("initalizing Mod SuperDApp executor and overwriting (if any)")
Mod.loadAppExecutor()
LogWriteInfo("Listening For SuperDApp opening calls")
