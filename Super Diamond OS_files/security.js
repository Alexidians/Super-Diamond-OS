securityCheck()
function securityCheck() {
 if(window.self !== window.top) {
  firewall("We do not allow this webpage to be embeded in an iframe")
 }
}

function firewall(reason) {
 try {
  document.body.innerHTML = "Security Firewall Activated. Reason: " + reason
 }
 catch(err) {
  firewall(reason)
 }
}
