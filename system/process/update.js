LogWriteInfo("Starting Task: system/process/update.js")
LogWriteInfo("initalizing version and newestVersion")
var resp = await fetch("Super Diamond OS_files/updateCheckerApi.js")
var code = await resp.text()
eval(code)
var version = newestVersion
LogWriteInfo("Initalizing AutomaticUpdateCheck")
function AutomaticUpdateCheck() {
 var checkerApi = document.createElement("script")
 checkerApi.src = "Super Diamond OS_files/updateCheckerApi.js"
 document.body.appendChild(checkerApi)
 checkerApi.remove()
 if(version < newestVersion) {
  clearInterval(AutomaticUpdateCheckInterval)
  document.getElementById("updateButton").style.display = "block"
  if(confirm("We Detected a newer Version of Super Diamond OS would you like to update")) {
   update()
  }
 }
}
LogWriteInfo("Initalizing Automatic Update Checker")
var AutomaticUpdateCheckInterval = setInterval(AutomaticUpdateCheck, 1000)
LogWriteInfo("Automatic Update Checker has been started. automatic warnings for updates will be sent")
