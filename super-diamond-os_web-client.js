function setUserAgent(window, userAgent) {
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = {
      get: function() {
        return userAgent;
      }
    };
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      });
    }
  }
}

setUserAgent(window, "Super-Diamond-Community/Newest-Release (Super-Diamond-OS Newest-Release) AppleWebKit/537.36 (KHTML, like Gecko) Super-Diamond-Browser/https://alexidians.github.io/Super-Diamond-OS")
