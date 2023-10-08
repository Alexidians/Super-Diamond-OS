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
navigator.__defineGetter__('appCodeName', function() {
    return 'Super Diamond';
});

navigator.__defineGetter__('appVersion', function() {
    return 'Latest-Release (Super-Diamond-OS Latest-Release;) AppleWebKit/537.36 (KHTML, like Gecko) Super-Diamond-Browser/Latest-Release';
});

navigator.__defineGetter__('language', function() {
    return 'en-US';
});

navigator.__defineGetter__('platform', function() {
    return 'Super-Diamond-OS Latest-Release';
});

navigator.__defineGetter__('languages', function() {
   var array = []
   array[0] = "en-US"
   array[1] = "en"
    return array
});

chrome = undefined
