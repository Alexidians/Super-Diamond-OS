var closeNotificationTimer = null
function notification(title, message) {
 if(Notification.permission == "granted") {
 clearInterval(closeNotificationTimer)
 var notific = document.getElementById("notification")
 var wind = notific.contentWindow
 var notificTitle = wind.eval("document.getElementById('title')")
 var notificMessage = wind.eval("document.getElementById('message')")
 notificTitle.innerHTML = title
 notificMessage.innerHTML = message
 notific.style.display = "none"
 closeNotificationTimer = setTimeout(hideNotification, 5000)
 } else {
  if(Notification.permission == "default") {
   Notification.requestPermission()
   if(Notification.permission == "granted") {
    notification(title, message)
   }
  }
 }
}
function hideNotification() {
 document.getElementById("notefication").style.display = "none"
}
