LogWriteInfo("Starting Task: system/process/notefication.js")
LogWriteInfo("initalizing notefication autocloser")
var closeNotificationTimer = null
LogWriteInfo("initalizing notefication popuper")
function notification(title, message) {
 LogWriteInfo("checking notefication permissions")
 if(Notification.permission == "granted") {
 LogWriteInfo("reseting autoclose notefication")
 clearInterval(closeNotificationTimer)
 LogWriteInfo("getting notefication element")
 var notific = document.getElementById("notification")
 var wind = notific.contentWindow
 LogWriteInfo("sending data")
 var notificTitle = wind.eval("document.getElementById('title')")
 var notificMessage = wind.eval("document.getElementById('message')")
 LogWriteInfo("showing notefication")
 notificTitle.innerHTML = title
 notificMessage.innerHTML = message
 notific.style.display = "block"
 LogWriteInfo("setting autoclose notefication")
 closeNotificationTimer = setTimeout(hideNotification, 5000)
 } else {
  LogWriteInfo("no notefication permissions detected. checking if unset")
  if(Notification.permission == "default") {
   LogWriteInfo("requesting permission")
   Notification.requestPermission()
   LogWriteInfo("checking if granted")
   if(Notification.permission == "granted") {
    LogWriteInfo("retrying...")
    notification(title, message)
   }
  }
 }
}
LogWriteInfo("initalizing notefication closer")
function hideNotification() {
 document.getElementById("notefication").style.display = "none"
}
LogWriteInfo("Listening for notefications")
