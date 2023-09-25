securityCheck()
function securityCheck() {
 if(window.self !== window.top) {
  firewall("We do not allow this webpage to be embeded in an iframe")
 }
}

function firewall(reason) {
 document.body.innerHTML = "Security Firewall Activated. Reason: " + reason
 if(window.self !== window.top) {
  console.error("Security Firewall Ativated on Super-Diamond-OS. Reason: " + reason)
 }
}
