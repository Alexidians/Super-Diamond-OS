    if(localStorage.getItem("JSPlugins") !== null) {
     var JSPlugins = localStorage.getItem("JSPlugins").split(",")
     for (let i = 0; i < JSPlugins.length; i++) {
      importJS(JSPlugins[i], false)
     }
    }
    if(localStorage.getItem("clockSpeed") == null || localStorage.getItem("clockSpeed") == "") {
     localStorage.setItem("clockSpeed", 0)
    }
    startTime()
    var startupProgram = localStorage.getItem("StartupProgram")
    OpenApp(startupProgram)
    var charging = false
    var BrowserCookie = document.cookie
    var ClientIP = "Grabbing..."
    var NavigatorAppVersion = navigator.appVersion;
    setInterval(eval, 0, "NavigatorAppVersion = navigator.appVersion")
    var UserAgent = navigator.userAgent;
    setInterval(eval, 0, "UserAgent = navigator.userAgent")
    var BrowserPlatform = navigator.platform;
    setInterval(eval, 0, "BrowserPlatform = navigator.platform")
    var BrowserLanguage = navigator.language;
    setInterval(eval, 0, "BrowserLanguage = navigator.language")
    var Password = localStorage.getItem("Password")
    var SuperDiamondVirusInterval = null;
    var crashInterval = null;
    var DragToolInterval = null
    const menu = document.getElementById("menu");
    var background = localStorage.getItem("background")
    var backgroundIsImage = localStorage.getItem("backgroundIsImage")
    if(backgroundIsImage == "true") {
     document.getElementById("desktop").style.backgroundImage = "url('" + background + "')";
    }
    if(backgroundIsImage == "true") {
     document.getElementById("desktop").style.backgroundColor = background
    }
    if(background == null) {
     document.getElementById("desktop").style.backgroundImage = "url('SuperDiamond.png')";
     background = "SuperDiamond.png"
     backgroundIsImage = "true"
    }
    if(backgroundIsImage == null) {
     document.getElementById("desktop").style.backgroundImage = "url('SuperDiamond.png')";
     background = "SuperDiamond.png"
     backgroundIsImage = "true"
    }
    var OSName = "Super Diamond OS"

  // Retrieve the TOTP secret key from local storage
  function getTOTPSecretKeyFromStorage() {
    return localStorage.getItem('totp_secret_key');
  }

  // Generate a TOTP code using the secret key
  function generateTOTPCode(secretKey) {
    const shaObj = new jsSHA('SHA-1', 'TEXT');
    const time = Math.floor(Date.now() / 1000 / 30); // Time in 30-second intervals
    const timeHex = (Array(16).join('0') + time.toString(16)).slice(-16); // Padded to 16 characters
    const key = base32Decode(secretKey);
    shaObj.setHMACKey(key, 'BYTES');
    shaObj.update(timeHex);
    const hmac = shaObj.getHMAC('HEX');
    const offset = parseInt(hmac.slice(-1), 16) & 0x0f;
    const code = (parseInt(hmac.slice(offset * 2, offset * 2 + 8), 16) & 0x7fffffff) % 1000000;
    return ('000000' + code).slice(-6); // Padded to 6 digits
  }

  // Base32 decoding function
  function base32Decode(str) {
    const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let decoded = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i).toUpperCase();
      const index = base32Chars.indexOf(char);
      decoded += index.toString(2).padStart(5, '0');
    }
    return String.fromCharCode(...decoded.match(/.{1,8}/g).map(byte => parseInt(byte, 2)));
  }

  function validateTOTPCode(cleanEnteredTOTP, secretKey) {
    const generatedCode = generateTOTPCode(secretKey);
    return cleanEnteredTOTP === generatedCode;
  }

  // Authenticate the user with TOTP
  function loginWith2FA() {
    try {
    const secretKey = getTOTPSecretKeyFromStorage();
    if (secretKey == null) {
      if(confirm('Please register your TOTP secret key first. would you like to do that? for security reasons. you will have to login with Super Diamond OS. if redirect fails. change page to 2FA-setup.html')) {
       location.replace("2FA-setup.html")
      }
      else {
       location.replace(location.href)
      }
      return;
    }
    const enteredTOTP = prompt('Enter your 6-digit authentication code from Super Diamond OS Authenticator');
    const isValid = validateTOTPCode(enteredTOTP, secretKey);
    if (isValid) {
      alert('Authentication successful!');
    } else {
      alert('Wrong Code. Authentication Failed');
      location.replace(location.href)
    }
    }
    catch(err) {
     alert('An Error Accoured While Authenticating. if you contant some moderators. give them this text "' + err + '"')
     location.replace(location.href)
    }
  }
    
async function loginWithWebAuthn() {
   try {
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: new Uint8Array(32), // Replace with a real challenge value
        rp: {
         name: OSName,
        },
        user: {
         id: new Uint8Array(16), // Replace with a real user ID
         name: OSName,
         displayName: OSName,
        },
        pubKeyCredParams: [
         { type: 'public-key', alg: -7 }, // ES256 algorithm, you may choose a different one
        ],
     }
    });

    if(credential && credential.response && credential.response.attestationObject) {
      //await verifyCredentialWithServer(credential);
      alert('WebAuthn authentication successful!');
    } else {
      alert('You Must Be Logged In To Access The OS. if you cant authenticate with WebAuthn try using the OS Login instead');
      location.replace(location.href)
    }
   }
   catch(err) {
    alert('An Error Accoured While Authentication. may be due to cancelation. if you contant some moderators. give them this text "' + err + '"')
    location.replace(location.href)
   }
}
async function verifyCredentialWithServer(credential) {
    const response = await fetch('/verifyCredential', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error('Server verification failed');
    }
}

  function loginWithEmailCode() {
  if(localStorage.getItem("Email") !== null) {
   if(localStorage.getItem("EmailType") == "Normal") {
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    emailjs.send("service_sx47f8v", "template_yobtnp4", {
      to_email: localStorage.getItem("Email"),
      code: verificationCode
    })
    .then(function(response) {
      var enteredCode = prompt("Enter The Verification Code We Sent You")
      if(enteredCode == verificationCode) {
       alert("Correct!")
      }
      else {
       alert("Incorrect!")
       location.replace(location.href)
      }
    }, function(error) {
     alert('An Error Accoured While sending email. if you contant some moderators. give them this text "' + error + '"')
     location.replace(location.href)
    });
   }
   if(localStorage.getItem("EmailType") == "SuperDiamondMail") {
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    var Request = new SuperDiamondMailApiRequest()
    Request.API = new SuperDiamondMailApi("sendMail")
    Request.params = {
     name: "Super Diamond OS",
     from: "SuperDiamondOS@alexidians.github.io",
     message: "We Received A Request That You Are Trying To Login With Super Diamond Mail Verification Code. Here is you verification Code: " + verificationCode,
     recipient: document.getElementById("newEmailInput").value,
     subject: "Super Diamond OS Email Verification",
     APIToken: "yB01kKebt6p7IOOlqWiwl6IATSsSsQoiZhCiJJHiOh9uukgSDgn8VeRrwfMAZxxV"
    }
    Request.send()
    if(prompt("Enter Verification Code. Remember Its In Super Diamond Mail") == verificationCode) {
     localStorage.setItem("Email", document.getElementById("newEmailInput").value)
     localStorage.setItem("EmailType", "SuperDiamondMail")
     alert("Correct!")
    }
    else {
     alert("Incorrect!")
    }
   }
  }
  else {
    if(confirm("You Must Have A Email Added To Your Super Diamond OS Account. Would you like to add one?")) {
     location.replace("set-email.html")
    }
    else {
     location.replace(location.href)
    }
  }
}
    
loginChoice = prompt("How Would You Like To Login? The Options are: Super Diamond OS, WebAuthn, 2FA, Email Code")
alert("We will start searching for login type " + loginChoice + " after you click okay. when we find the login type we will automatically start login process.")
switch(loginChoice) {
   default:
    alert("Invalid Login Method")
    location.replace(location.href)
   break;
   case "WebAuthn":
     loginWithWebAuthn();
   break;
   case "2FA":
     loginWith2FA();
   break;
   case "Email Code":
     loginWithEmailCode();
   break;
   case "Super Diamond OS":
    if(Password == "null") {
     alert("Welcome")
     alert("if you are a child/kid ask your parents to help setup Super Diamond OS in this browser")
     alert("Setup Note: Every Browser on Every Device has the has different Data saved/n if you are a parent setting this up for kids a account needs to be created for all of your kids/n important: if you are using a browser with restricted website access for kids it can be bypassed with our browser that uses iframes or other apps that have iframes to not allowed websites")
     alert("Before you go. Lets Setup your Device")
     Setup()
    } else {
     if(Password == null) {
      alert("Welcome")
      alert("if you are a child/kid ask your parents to help setup Super Diamond OS in this browser")
      alert("Setup Note: Every Browser on Every Device has the has different Data saved/n if you are a parent setting this up for kids a account needs to be created for all of your kids/n important: if you are using a browser with restricted website access for kids it can be bypassed with our browser that uses iframes or other apps that have iframes to not allowed websites")
      alert("Before you go. Lets Setup your Device")
      Setup()
     } else {
      if(Password == "Recover") {
       alert("Welcome")
       alert("if you are a child/kid ask your parents to help setup Super Diamond OS in this browser")
       alert("Setup Note: Every Browser on Every Device has the has different Data saved/n if you are a parent setting this up for kids a account needs to be created for all of your kids/n important: if you are using a browser with restricted website access for kids it can be bypassed with our browser that uses iframes or other apps that have iframes to not allowed websites")
       alert("Before you go. Lets Setup your Device")
       Setup()
      } else {
       if(getCookie("loggedIn") == "itis") {
        alert("Welcome Back")
       }
       else {
       var LoginEnteredPass = prompt("Enter Password To Continue")
       if(LoginEnteredPass == Password) {
        alert("Welcome Back")
        setCookie("loggedIn", "itis", 1)
       } else {
        if(LoginEnteredPass == "Recover") {
         alert("The Recovery Feature might not be added but it currently is not here/n If you need to recover/reset your password Contact us at super_diamond_community@inbox.lv")
         open("mailto:super_diamond_community@inbox.lv")
         location.replace(location.href)
        } else {
         alert("Incorrect Password")
         location.replace(location.href)
        }
       }
       }
      }
     }
    }
   break;
  }
    AntiVirusPermissionRequest()
    //openFullscreen(document.body)
    openHomeMenu()

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

   function openHomeMenu() {
    var homeMenu = document.getElementById("homeMenu")
    homeMenu.style.display = "block"
    homeMenu.src = "Super Diamond OS_files/updateCheckerApi.js"
    homeMenu.src = "Super Diamond OS_files/home.html"
   }

window.onclick = function(event) {
  if (event.target == document.getElementById("homeMenu")) {
   document.getElementById("homeMenu").style.display = "none";
  }
}
    // Function to make windows draggable
    function makeDraggable(element) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(element.id + "-header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(element.id + "-header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        element.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
      }

      function newIframeApp(url, title) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     AppTitle.innerHTML = title
     App.id = title
     var frame = document.createElement("iframe")
     frame.src = url
     frame.width = "600"
     frame.height = "500"
     App.appendChild(frame)
     document.getElementById("Apps").appendChild(App)
     return App;
      }

      function newJSApp(code, title) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     AppTitle.innerHTML = title
     App.id = title
     document.getElementById("Apps").appendChild(App)
     eval(code)
     return App;
      }

      function newLuaApp(code, title) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     AppTitle.innerHTML = title
     App.id = title
     document.getElementById("Apps").appendChild(App)
     var script = document.createElement("script")
     script.type = "application/lua"
     script.innerHTML = code
     App.appendChild(script)
     return App;
      }

      function playSound(url) {
       var player = document.getElementById("audio")
       var playerSource = document.createElement("source")
       playerSource.src = url
       playerSource.type = "audio/" + url.split(".")[url.split(".").length]
       player.appendChild(playerSource)
       document.body.appendChild(player)
       player.play()
      }

      function setStartupProgram(appName) {
       localStorage.setItem("StartupProgram", appName)
       startupProgram = appName
      }

      function importJS(url, saveInDisc) {
       var script = document.createElement("script")
       script.src = url
       document.body.appendChild(script)
       if(saveInDisc) {
        if(localStorage.getItem("JSPlugins") !== null) {
         localStorage.setItem("JSPlugins", localStorage.getItem("JSPlugins") + "," + url)
        }
        else {
         localStorage.setItem("JSPlugins", url)
        }
       }
      }

      function importCss(url) {
       var stylesheet = document.createElement("link")
       stylesheet.src = url
       stylesheet.rel = "stylesheet/css"
       document.body.appendChild(stylesheet)
      }

      function importLua(url) {
       var script = document.createElement("script")
       script.src = url
       script.rel = "application/lua"
       document.body.appendChild(script)
      }

      function importPlugin(url,endpoint) {
       switch(endpoint) {
  case "js":
    importJS(url)
    return "succesfully Added JS plugin: " + url;
  case "css":
    importCss(url)
    return "succesfully Added Css plugin: " + url;
  case "lua":
   importLua(url) 
   return "succesfully Added lua plugin: " + url;
  default:
   return "plugin has invalid file type"
}
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    
      function SetCharging(isCharging) {
       charging = isCharging
      }

    function OpenApp(AppName) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     var AppTitleTextNode = document.createTextNode(AppName)
     if(AppName == "Virtual Machine") {
      App.id = "Virtual Machine"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Virtual Machine"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/Virtual-Machine.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Nyan Cat: Lost In Space") {
      App.id = "Nyan Cat: Lost In Space"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Nyan Cat: Lost In Space"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.src = "https://www.gameflare.com/embed/nyan-cat-lost-in-space/"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Super Diamond Browser") {
      App.id = "Super Diamond Browser"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Super Diamond Browser"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/good_super_diamond_browser.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Corrupt A File.net") {
      App.id = "Corrupt A File.net"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Corrupt A File.net"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "http://corrupt-a-file.net"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Command Prompt") {
      App.id = "Command Prompt"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Command Prompt"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/command-prompt.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Easy.gg") {
      App.id = "Easy.gg"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Easy.gg"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "http://easy.gg"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Data Grabber") {
      App.id = "Data Grabber"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Data Grabber"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/data-grabber.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Files") {
      App.id = "Files"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Files"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/files.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Monday") {
      App.id = "Monday"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Easy.gg"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "http://monday.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Super Diamond Roblox") {
      App.id = "Super Diamond Roblox"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Super Diamond Roblox"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://alexidians.github.io/Super-Diamond-Roblox/app/files/roblox.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Roblox") {
      App.id = "Roblox"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Roblox"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://roblox.com'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Clicker Heroes") {
      App.id = "Clicker Heroes"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Clicker Heroes"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://games.crazygames.com/en_US/clicker-heroes/index.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Bloxd-io") {
      App.id = "Bloxd-io"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Bloxd-io"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://bloxd.io"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "QRcode Generator") {
      App.id = "QRcode Generator"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "QRcode Generator"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/qrcode-generator.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Maps") {
      App.id = "Maps"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Maps"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/maps.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Data Matrix Generator") {
      App.id = "Data Matrix Generator"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Data Matrix Generator"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/data-matrix-generator.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Countdown") {
      App.id = "Countdown"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Countdown"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/countdown.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Counter") {
      App.id = "Counter"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Counter"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/counter.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Rickroll") {
      App.id = "Rickroll"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Rickroll"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "ERROR") {
      App.id = "ERROR"
      AppTitle.InnerHTML = "ERROR"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      document.getElementById("Apps").appendChild(App)
      Crash("An Unknown Error Accoured")
      ShutDownApp("ERROR")
     }
     if(AppName == "Wix Owner PC") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Wix Owner PC"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://wix.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Wix Owner") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Wix Owner"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://wix.com"
      AppFrame.width = "350"
      AppFrame.height = "650"
      App.style.width = "350px";
      App.style.height = "650px";
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "ChatGPT") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "ChatGPT"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://chat.openai.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Wikipedia") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Wikipedia"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://wikipedia.org"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Archive") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Internet Archive"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://archive.org"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Web Tool Hub") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Web Tool Hub"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "webtoolhub.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Max") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Max"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://max.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Shutterstock") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Shutterstock"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://shutterstock.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Kick") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Kick"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://kick.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Android") {
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Android"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://android.com"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Youtube") {
      App.id = "Youtube"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Youtube"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/app_youtube.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Calculator") {
      App.id = "Calculator"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Calculator"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/calculator.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Feed The Cat") {
      App.id = "Feed The Cat"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Feed The Cat"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/feed-the-cat"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Click Counter") {
      App.id = "Click Counter"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Click Counter"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/click-counter.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Super Diamond Anti-Virus") {
      App.id = "Super Diamond Anti-Virus"
      AppTitle.InnerHTML = "Super Diamond Anti-Virus"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      document.getElementById("Apps").appendChild(App)
      ErrorMessage("This App can't be opened as it notifies when a virus is detected and when you run a virus it asks to delete Virus")
      ShutDownApp("Super Diamond Anti-Virus")
     }
     if(AppName == "Task Manager") {
      App.id = "Task Manager"
      AppTitle.InnerHTML = "Task Manager"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppInput = document.createElement("input")
      AppInput.type = "text"
      AppInput.id = "TaskManagerShutDownInput"
      var AppShutDownButton = document.createElement("button")
      AppShutDownButton.onclick="ShutDownApp('AppInput')"
      AppShutDownButton.innerHTML="Shut Down"
      App.appendChild(AppInput)
      App.appendChild(AppShutDownButton)
      document.getElementById("Apps").appendChild(App)
     }
     if(AppName == "Drag Tools") {
      App.id = "Drag Tools"
      AppTitle.InnerHTML = "Drag Tools"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var ElemInput = document.createElement("input")
      ElemInput.type = "text"
      ElemInput.id = "DragToolsInput"
      App.appendChild(ElemInput)
      document.getElementById("Apps").appendChild(App)
      DragToolInterval = setInterval(DragToolsAction, 0)
     }
     if(AppName == "Super Diamond Virus") {
      App.id = "Super Diamond Virus"
      AppTitle.InnerHTML = "Super Diamond Virus"
      AppTitle.appendChild(AppTitleTextNode)
      clearInterval(SuperDiamondVirusInterval)
      localStorage.setItem("NotepadText", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("Bookmarks", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("UrlHistory", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("SuperDiamonds", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      WarningMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      ErrorMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      OSMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      makeDraggable(document.getElementById("taskbar"))
      setTimeout(SuperDiamondVirusDragAction2, 10000)
      HasSuperDiamondVirus = true
      SuperDiamondVirusInterval = setInterval(VirusInterval, 0, "Super Diamond Virus")
      App.appendChild(AppTitle)
      document.getElementById("Apps").appendChild(App)
      ShutDownApp("Super Diamond Virus")
      WarningMessage("(Super Diamond Anti-Virus) We Detected a Virus On Your Device [Super Diamond Virus]")
      var RemoveVirus = confirm("(Super Diamond Anti-Virus) Delete Super Diamond Virus?")
      if(RemoveVirus) {
       clearInterval(SuperDiamondVirusInterval)
       HasSuperDiamondVirus = false
       OSMessage("(Super Diamond Anti-Virus) The Virus was Removed Sucessfully.")
       WarningMessage("The Virus Might of already Done Something to your device")
       OSMessage("(Super Diamond Virus) I Have 10 seconds left to virus your device and i lost some power")
      }
     }
     if(AppName == "Notepad") {
      App.id = "Notepad"
      AppTitle.InnerHTML = "Notepad"
      var NotepadText = document.createElement("textarea")
      var NotepadTextNode = document.createTextNode(localStorage.getItem("NotepadText"))
      NotepadText.id = "NotepadText"
      NotepadText.name = "NotepadText"
      NotepadText.rows = "29"
      NotepadText.cols = "79"
      NotepadText.type = "text"
      NotepadText.appendChild(NotepadTextNode)
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(NotepadText)
      document.getElementById("Apps").appendChild(App)
     }
     if(AppName == "Data") {
      App.id = "Data"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Data"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/data.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Inputs") {
      App.id = "Inputs"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Inputs"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/inputs.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Countly") {
      App.id = "Countly"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Countly"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://arturs.count.ly"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Fireworks") {
      App.id = "Fireworks"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Fireworks"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/fireworks.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Google") {
      App.id = "Google"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Google"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://www.google.com/search?q=Google' height='500' width='600'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Google LV") {
      App.id = "Google LV"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Google LV"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://www.google.lv/search?q=Google' height='500' width='600'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Google DE") {
      App.id = "Google DE"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Google DE"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://www.google.de/search?q=Google' height='500' width='600'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Gmail") {
      App.id = "Gmail"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Gmail"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://gmail.com' height='500' width='600'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Google Play") {
      App.id = "Google Play"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Google Play"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://play.google.com' height='500' width='600'></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Github") {
      App.id = "Github"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Github"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      var AppFrame = document.createElement("p")
      AppFrame.innerHTML = "<iframe is='x-frame-bypass' src='https://github.com height='500' width='600''></iframe>"
      App.appendChild(AppFrame)
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Corrupted File Generator") {
      App.id = "Corrupted File Generator"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Corrupted File Generator"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "https://tally.so/r/3y2Ep0"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Vedit") {
      App.id = "Vedit"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Vedit"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "vedit-download.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
      if(confirm("Allow Vedit to Download Files on your Real Operating System") == false) {
       ShutDownApp("Vedit")
       ErrorMessage("[Vedit] Allow The Download Files on Real Operating System to Launch Vedit and Download vedit.js")
      }
     }
    if(AppName == "Settings") {
      App.id = "Settings"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Settings"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "settings.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
    }

    function ShutDownApp(AppId) {
     var App = document.getElementById(AppId)
     if(AppId == "Super Diamond Notepad") {
      localStorage.setItem("NotepadText", document.getElementById("NotepadText").value)
      OSMessage("(Super Diamond Notepad) Notepad Saved Sucesfully")
     }
     if(AppId == "Task Manager" && document.getElementById("TaskManagerShutDownInput").value == "" == false) {
      try {
       ShutDownApp(document.getElementById("TaskManagerShutDownInput").value)
      }
      catch(err) {
        ErrorMessage("(Task Manager) There was an Error while Shutting down " + document.getElementById("TaskManagerShutDownInput").value)
      }
     }
     App.remove()
    }

    function Contact(Type) {
     if(Type == "Mail") {
      open("mailto:super_diamond_community@inbox.lv")
     }
    }
    
    function Setup() {
     location.replace("computer-setup.html")
    }
    
    function console() {
     var command = prompt("What Would you like to run? Need Other Tools? press f12")
     try {
      var commandOutput = eval(command)
      alert(commandOutput)
     }
     catch(err) {
      alert(err)
     }
    }
    function protectedConsole() {
     var pass = prompt("Enter Password")
     if(pass == "Ajosios") {
      console()
     }
    }
    
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      const x = event.clientX;
      const y = event.clientY;
      showMenu(x, y);
    });

    function showMenu(x, y) {
      menu.style.left = x + "px";
      menu.style.top = y + "px";
      menu.style.display = "block";
      document.addEventListener("click", hideMenu);
    }

    function hideMenu() {
      menu.style.display = "none";
      document.removeEventListener("click", hideMenu);
    }
           
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen(elem) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
           
    function DeleteSystemFile(file) {
     if(file == "os.js") {
      var osjs = document.getElementById("osjs")
      OSMessage(osjs + " was Deleted Sucesfully")
      osjs.remove()
      var AutomaticRepair = confirm("We Detected a Deleted System File Would you like to run Repair?")
      if(AutomaticRepair == true) {
       Repair()
      }
     }
     if(file == "os.css") {
      var oscss = document.getElementById("oscss")
      OSMessage(oscss + " was Deleted Sucesfully")
      oscss.remove()
      var AutomaticRepair = confirm("We Detected a Deleted System File Would you like to run Repair?")
      if(AutomaticRepair == true) {
       Repair()
      }
     }
    }
    function GetSystemFileData(file) {
     if(file == "os.js") {f
      var osjs = document.getElementById("osjs")
      OSMessage(osjs.innerHTML)
     }
     if(file == "os.css") {
      var oscss = document.getElementById("oscss")
      OSMessage(oscss.innerHTML)
     }
     if(file == "htmlos.html") {
      var htmloshtml = document.getElementById("htmloshtml")
      OSMessage(htmloshtml.innerHTML)
     }
    }
    function TaskBarSearch() {
     try {
      var search = document.getElementById("taskbarSearch").value
      OpenApp(search)
     }
     catch(err) {
      ErrorMessage(err)
     }
    }
    function ErrorMessage(message) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     var ErrorMessage = document.createElement("p")
     var ErrorMessageNode = document.createTextNode(message)
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     ErrorMessage.appendChild(ErrorMessageNode)
     var AppTitleTextNode = document.createTextNode("ERROR")
     AppTitle.appendChild(AppTitleTextNode)
     App.appendChild(AppTitle)
     App.appendChild(ErrorMessage)
     App.id = "Error Message"
     document.getElementById("Apps").appendChild(App)
     makeDraggable(App)
    }
    
    function AntiVirusPermissionRequest() {
     var PermsAllowed = confirm("Super Diamond Anti-Virus wants The Manage Permissions Permission")
    }

    function WarningMessage(message) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     var WarningMessage = document.createElement("p")
     var WarningMessageNode = document.createTextNode(message)
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     WarningMessage.appendChild(WarningMessageNode)
     var AppTitleTextNode = document.createTextNode("Warning")
     AppTitle.appendChild(AppTitleTextNode)
     App.appendChild(AppTitle)
     App.appendChild(WarningMessage)
     App.id = "Warning Message"
     document.getElementById("Apps").appendChild(App)
     makeDraggable(App)
    }

    function OSMessage(message) {
     var App = document.createElement("div")
     var AppTitle = document.createElement("h3")
     var OSMessage = document.createElement("p")
     var OSMessageNode = document.createTextNode(message)
     App.class = "window"
     App.style.width = "600px";
     App.style.height = "500px";
     App.style.backgroundColor = "#fff";
     App.style.border = "1px solid #ccc";
     App.style.position = "absolute";
     App.style.top = "100px";
     App.style.left = "100px";
     App.style.cursor = "move";
     OSMessage.appendChild(OSMessageNode)
     var AppTitleTextNode = document.createTextNode("OS Message")
     AppTitle.appendChild(AppTitleTextNode)
     App.appendChild(AppTitle)
     App.appendChild(OSMessage)
     App.id = "OS Message"
     document.getElementById("Apps").appendChild(App)
     makeDraggable(App)
    }
    
    function VirusInterval(VirusType) {
     if(VirusType == "Super Diamond Virus") {
      localStorage.setItem("NotepadText", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("Bookmarks", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("UrlHistory", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      localStorage.setItem("SuperDiamonds", "SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      WarningMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      ErrorMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      OSMessage("SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS,SUPER DIAMOND VIRUS")
      HasSuperDiamondVirus = true
     }
    }
    function SuperDiamondVirusDragAction2() {
     makeDraggable(document.getElementById("desktop"))
    }
    function Open(url) {
     open(url)
    }
    
    function CustomApp() {
     var App = prompt("Enter App ID")
     OpenApp(App)
    }

    function ReinstallOS() {
     OSMessage("OS is being Reinstalled")
     setTimeout(ShutDownApp, 10000, "Apps")
     setTimeout(ShutDownApp, 20000, "AppShortcuts")
     setTimeout(ShutDownApp, 30000, "taskbar")
     setTimeout(ReinstallOS2, 40000)
    }

    function ReinstallOS2() {
     localStorage.removeItem("Password")
     localStorage.removeItem("NotepadText")
     localStorage.removeItem("background")
     localStorage.removeItem("backgroundIsImage")
     ShutDown()
     setTimeout(RepairRepaired, 20000)
    }
    
    function OSReinstall() {
     if(confirm("(Super Diamond Anti-Virus) An Executable named ReinstallOS is trying to be runned and it can Reinstall The OS would you like to run it") == true) {
      ReinstallOS
     }
    }
    
    function ReinstallOSProtected() {
     if(prompt("Enter Password") == Password) {
      OSReinstall()
     } else {
      alert("Incorrect Password")
     }
    }
          
    function DragToolsAction() {
     makeDraggable(document.getElementById(document.getElementById("DragToolsInput").value))
    }
          
    function Repair() {
     ShutDown()
     setTimeout(RepairRepaired, 20000)
    }
    function RepairRepaired() {
     location.replace(location.href)
    }
    function DataViewProtected() {
     if(prompt("Enter Your Password") == Password) {
      OpenApp("Data")
     }
    }
    function ShutDown() {
     document.getElementById("desktop").remove()
     var gif = document.createElement("img")
     gif.id = "ShutDownGif"
     gif.width = "2280"
     gif.height = "1500"
     document.body.appendChild(gif)
     setTimeout(off, 10000)
    }
    function off() {
     document.body.style.backgroundColor = "black";
     document.getElementById("ShutDownGif").remove()
    }
    
    function Save(app) {
     if(app == "Super Diamond Notepad") {
      localStorage.setItem("NotepadText", documet.getElementById("NotepadText").value)
     }
    }
    
    function setPassword(pass) {
     localStorage.setItem("Password", pass)
     Password = pass
    }
    
    function lock() {
     setCookie("loggedIn", "heIsnt", 1)
     if(prompt("Enter Password to Unlock Screen") == Password) {
      setCookie("loggedIn", "itis", 1)
      alert("Screen Unlocked Sucesfully")
     } else {
      alert("Incorrect Password")
      lock()
     }
    }
          
    function changeBackground() {
     backgroundIsImage = confirm("Would you like to set your background as a image?")
     localStorage.setItem("backgroundIsImage", backgroundIsImage)
     if(backgroundIsImage) {
      background = prompt("Enter Background Image Url")
      document.getElementById("desktop").style.backgroundImage  = "url('" + background + "')";
      localStorage.setItem("background", background)
     } else {
      background = prompt("Enter Background Color")
      document.getElementById("desktop").style.backgroundColor  = background;
      localStorage.setItem("background", background)
     }
    }
    
    function AddAppShortcut(img, text, app) {
     var imgelem = document.createElement("p")
     var imgelement = document.createElement("img")
     var textelem = document.createElement("p")
     var textelement = document.createElement("a")
     textelement.innerHTML = text
     textelement.onclick = "OpenApp('" + app + "')"
     imgelement.onclick = "OpenApp('" + app + "')"
     imgelement.height = "50"
     imgelement.width = "50"
     imgelement.src = img
     textelem.appendChild(textelement)
     imgelem.appendChild(imgelement)
     var ShortcutPlace = document.getElementById("AppShortcuts")
     ShortcutPlace.appendChild(imgelem)
     ShortcutPlace.appendChild(textelem)
    }
    function CreateAppShortcut() {
     var imgurl = prompt("Enter Image Url")
     var shortcuttext = prompt("Enter Shortcut Text")
     var appid = prompt("Enter App Id")
     AddAppShortcut(imgurl, shortcuttext, appid)
     OSMessage("Your Shortcut of " + appid + " Was Created")
    }
   
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timeText').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, parseInt(localStorage.getItem("clockSpeed")));
}
           
function getTime() {
  const today = new Date();
  return today;
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function clock() {
 return document.getElementById("timeText").innerHTML;
}

function sendRequest(url, data) {
 var frame = document.createElement("iframe")
 frame.src = url
 frame.style.display = "none"
 document.body.appendChild(frame)
 const iframe = frame
 const wind = iframe.contentWindow
 wind.postMessage(data, "*")
}
    // Make all windows draggable
    const windows = document.querySelectorAll(".window");
    windows.forEach(window => {
      makeDraggable(window);
    });
   const blackwindows = document.querySelectorAll(".windowblack");
    blackwindows.forEach(window => {
      makeDraggable(window);
    });
