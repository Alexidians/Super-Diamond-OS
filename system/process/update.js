LogWriteInfo("Starting Task: system/process/update.js")
var AutomaticUpdateCheckInterval = null
LogWriteInfo("Getting Current Version")
var checkerApi = document.createElement("script")
checkerApi.src = "Super Diamond OS_files/updateCheckerApi.js"
document.body.appendChild(checkerApi)
checkerApi.remove()
setTimeout(1000, function() {
 LogWriteInfo("initalizing version and newestVersion")
var version = newestVersion
LogWriteInfo("Initalizing AutomaticUpdateCheck")
function AutomaticUpdateCheck() {
 checkerApi = document.createElement("script")
 checkerApi.src = "Super Diamond OS_files/updateCheckerApi.js"
 document.body.appendChild(checkerApi)
 checkerApi.remove()
 if(version < newestVersion) {
  clearInterval(AutomaticUpdateCheckInterval)
  document.getElementById("updateButton").style.display = "inline"
  if(confirm("We Detected a newer Version of Super Diamond OS would you like to update")) {
   update()
  }
 }
}
LogWriteInfo("Initalizing Automatic Update Checker")
AutomaticUpdateCheckInterval = setInterval(AutomaticUpdateCheck, 1000)
LogWriteInfo("Automatic Update Checker has been started. automatic warnings for updates will be sent")
})
