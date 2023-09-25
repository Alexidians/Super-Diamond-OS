securityCheck()
function securityCheck() {
 if(window.self !== window.top) {
  document.body.innerHTML = "Security Firewall Activated. Reason: We do not allow this webpage to be embeded in an iframe"
 }
}
