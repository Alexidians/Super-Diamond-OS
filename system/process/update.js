var version = 36
var newestVersion = version
var AutomaticUpdateCheckInterval = setInterval(AutomaticUpdateCheck, 1000)
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
