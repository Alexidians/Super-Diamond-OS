LogWriteInfo("Starting Task: system/process/update.js")
LogWriteInfo("initalizing version and newestVersion")
var version = 43
var newestVersion = version
LogWriteInfo("initalizing AutomaticUpdateCheck")
function AutomaticUpdateCheck() {
 var checkerApi = document.createElement("script")
 checkerApi.src = "Super Diamond OS_files/updateCheckerApi.js"
 document.body.appendChild(checkerApi)
 checkerApi.remove()
 if(version < newestVersion) {
  clearInterval(AutomaticUpdateCheckInterval)
  LogWriteInfo("~An Update Has Been Detected")
  document.getElementById("updateButton").style.display = "inline"
  if(confirm("We Detected a newer Version of Super Diamond OS would you like to update")) {
   update()
  }
 }
}
LogWriteInfo("Initalizing Automatic Update Checker")
var AutomaticUpdateCheckInterval = setInterval(AutomaticUpdateCheck, 1000)
LogWriteInfo("Automatic Update Checker has been started. automatic warnings for updates will be sent")
