   LogWriteInfo("Starting Task: system/process/os.js")
   LogWriteInfo("checking JS plugins")
   if(localStorage.getItem("JSPlugins") !== null) {
     LogWriteInfo("JS plugins found. getting js plugins")
     var JSPlugins = localStorage.getItem("JSPlugins").split(",")
     LogWriteInfo("executing js plugins")
     for (let i = 0; i < JSPlugins.length; i++) {
      importJS(JSPlugins[i], false)
     }
    }
    LogWriteInfo("checking clockspeed. setting to fastest if none set")
    if(localStorage.getItem("clockSpeed") == null || localStorage.getItem("clockSpeed") == "") {
     localStorage.setItem("clockSpeed", 0)
    }
    LogWriteInfo("starting clock")
    startTime()
    LogWriteInfo("reading startup program")
    var startupProgram = localStorage.getItem("StartupProgram")
    LogWriteInfo("starting startup program")
    OpenApp(startupProgram)
    LogWriteInfo("initalizing charging variable")
    var charging = false
    LogWriteInfo("setting browser-based data")
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
    LogWriteInfo("reading os data")
    var Password = localStorage.getItem("Password")
    LogWriteInfo("setting some other variables")
    var SuperDiamondVirusInterval = null;
    var crashInterval = null;
    var DragToolInterval = null
    var menu = document.getElementById("menu");
    var background = localStorage.getItem("background")
    var backgroundIsImage = localStorage.getItem("backgroundIsImage")
    LogWriteInfo("setting desktop background")
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
    LogWriteInfo("checking logged in")
    if(localStorage.getItem("Password") !== null) {
     if(getCookie("loggedIn") !== "itis") {
      location.replace("computer-login.html")
     }
    } else {
     location.replace("computer-setup.html")
    }

    LogWriteInfo("doing some startup actions")
    AntiVirusPermissionRequest()
    //openFullscreen(document.body)
    openHomeMenu()

LogWriteInfo("initalizing system functions")
function setCookie(cname,cvalue,exdays) {
 LogWriteInfo("seting temporary data. name: " + cname + ", value: " + cvalue + ", expiration days:" + exdays)
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
 LogWriteInfo("getting temporary data. name: " + cname)
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
    LogWriteInfo("opening home menu")
    var homeMenu = document.getElementById("homeMenu")
    homeMenu.style.display = "block"
    homeMenu.src = "Super Diamond OS_files/updateCheckerApi.js"
    homeMenu.src = "Super Diamond OS_files/home.html"
   }

window.onclick = function(event) {
  if (event.target !== document.getElementById("homeMenu") && event.target !== document.getElementById("taskbarbtn.homemenu") && document.getElementById("homeMenu").style.display == "block") {
   LogWriteInfo("closing home menu")
   document.getElementById("homeMenu").style.display = "none";
  }
}
    // Function to make windows draggable
    function makeDraggable(element) {
      LogWriteInfo("making element " + element + " draggable")
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
        LogWriteInfo("initalizing new iframe app window")
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
        LogWriteInfo("initalizing new executable app")
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
          LogWriteInfo("initalizing new lua executable app")
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
      LogWriteInfo("playing sound from " + url)
       var player = document.getElementById("audio")
       var playerSource = document.createElement("source")
       playerSource.src = url
       playerSource.type = "audio/" + url.split(".")[url.split(".").length]
       player.appendChild(playerSource)
       document.body.appendChild(player)
       player.play()
      }

      function setStartupProgram(appName) {
       LogWriteInfo("setting startup programing to " + appName)
       localStorage.setItem("StartupProgram", appName)
       startupProgram = appName
      }

      function importJS(url, saveInDisc) {
       LogWriteInfo("importing js file url: " + url + ", save: " + saveInDisc)
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
       LogWriteInfo("importing css file url: " + url)
       var stylesheet = document.createElement("link")
       stylesheet.src = url
       stylesheet.rel = "stylesheet/css"
       document.body.appendChild(stylesheet)
      }

      function importLua(url) {
       LogWriteInfo("importing lua file url: " + url)
       var script = document.createElement("script")
       script.src = url
       script.rel = "application/lua"
       document.body.appendChild(script)
      }

      function importPlugin(url,endpoint) {
       LogWriteInfo("importing plugin url: " + url + ", extension: " + endpoint)
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
       LogWriteInfo("the charging state has been changed to " + isCharging)
       charging = isCharging
      }

    function openSuperDAppUpload() {
     document.getElementById('SuperDAppUpload').click();
    }

    document.getElementById('SuperDAppUpload').addEventListener('change', handleSuperDAppUpload);

    function handleSuperDAppUpload(event) {
        LogWriteInfo("Starting SuperDApp execution")
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const fileContent = e.target.result;
                execSuperDApp(fileContent);
            };

            reader.readAsText(file);
        }
    }

    function OpenApp(AppName) {
     LogWriteInfo("opening preinstalled/system app " + AppName)
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
     if(AppName == "File System") {
      App.id = "File System"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "File System"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "fs.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Camera") {
      App.id = "Camera"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Camera"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/camera.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Video Recorder") {
      App.id = "Video Recorder"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Video Recorder"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/video-recorder.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
     if(AppName == "Audio Recorder") {
      App.id = "Audio Recorder"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Audio Recorder"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "Super Diamond OS_files/audio-recorder.html"
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
      LogWriteInfo("shutting down app by id: " + AppId)
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
        LogWriteERR("(Task Manager) There was an Error while Shutting down " + document.getElementById("TaskManagerShutDownInput").value)
      }
     }
     App.remove()
    }

    function Contact(Type) {
     LogWriteInfo("Opening Contact window for " + type)
     if(Type == "Mail") {
      open("mailto:super_diamond_community@inbox.lv")
     }
    }
    
    function Setup() {
     LogWriteInfo("Going to setup")
     location.replace("computer-setup.html")
    }
    
    function console() {
     LogWriteInfo("Starting Console")
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
     LogWriteInfo("Opening Console Pass Prompt")
     var pass = prompt("Enter Password")
     if(pass == "Ajosios") {
      console()
     }
    }
    
    document.addEventListener("contextmenu", function(event) {
      LogWriteInfo("Opening Right Click menu")
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
     LogWriteInfo("Deleting system file " + file + " for this session")
     if(file == "os.js") {
      var osjs = document.getElementById("osjs")
      OSMessage(osjs + " was Deleted Sucesfully")
      osjs.remove()
      LogWriteWarn("Deleted System File Detected: os.js")
      var AutomaticRepair = confirm("We Detected a Deleted System File Would you like to run Repair?")
      if(AutomaticRepair == true) {
       Repair()
      }
     }
     if(file == "os.css") {
      var oscss = document.getElementById("oscss")
      OSMessage(oscss + " was Deleted Sucesfully")
      oscss.remove()
      LogWriteWarn("Deleted System File Detected: os.css")
      var AutomaticRepair = confirm("We Detected a Deleted System File Would you like to run Repair?")
      if(AutomaticRepair == true) {
       Repair()
      }
     }
    }
    function GetSystemFileData(file) {
     LogWriteInfo("reading system file " + file)
     if(file == "os.js") {
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
      LogWriteInfo("searching with taskbar: " + document.getElementById("taskbarSearch").value)
      var search = document.getElementById("taskbarSearch").value
      OpenApp(search)
     }
     catch(err) {
      ErrorMessage(err)
      LogWriteERR(err)
     }
    }
    function ErrorMessage(message) {
     LogWriteERR("Error Message Detected: " + message)
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
     LogWriteWarn("Warning Message Detected: " + message)
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
     LogWriteInfo("Information Message Detected: " + message)
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
     LogWriteInfo("Starting Pre-installed/system app opener prompt")
     var App = prompt("Enter App ID")
     OpenApp(App)
    }

    function ReinstallOS() {
     LogWriteInfo("OS is being reinstalled")
     OSMessage("OS is being Reinstalled")
     setTimeout(ShutDownApp, 10000, "Apps")
     setTimeout(ShutDownApp, 20000, "AppShortcuts")
     setTimeout(ShutDownApp, 30000, "taskbar")
     setTimeout(ReinstallOS2, 40000)
    }

    function ReinstallOS2() {
     LogWriteInfo("OS reinstall sucesfull after a few seconds")
     localStorage.removeItem("Password")
     localStorage.removeItem("NotepadText")
     localStorage.removeItem("background")
     localStorage.removeItem("backgroundIsImage")
     LogWriteInfo("OS reinstall sucesfull. shutting down")
     ShutDown()
     setTimeout(RepairRepaired, 20000)
    }
    
    function OSReinstall() {
     if(confirm("(Super Diamond Anti-Virus) An Executable named ReinstallOS is trying to be runned and it can Reinstall The OS would you like to run it") == true) {
      ReinstallOS
     }
    }
    
    function ReinstallOSProtected() {
     LogWriteInfo("OS reinstall security prompt initalizing")
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
     LogWriteInfo("Repairing Super Diamond OS Session")
     ShutDown()
     setTimeout(RepairRepaired, 20000)
    }
    function RepairRepaired() {
     LogWriteInfo("Super Diamond OS Session Repaired")
     location.replace(location.href)
    }
    function DataViewProtected() {
     LogWriteInfo("Opening View Data security prompt")
     if(prompt("Enter Your Password") == Password) {
      OpenApp("Data")
     }
    }
    function ShutDown() {
     LogWriteInfo("Shuting Down...")
     document.getElementById("desktop").remove()
     var gif = document.createElement("img")
     gif.id = "ShutDownGif"
     gif.width = "2280"
     gif.height = "1500"
     document.body.appendChild(gif)
     setTimeout(off, 10000)
    }
    function off() {
     LogWriteInfo("Super Diamond OS has been turned off")
     document.body.style.backgroundColor = "black";
     document.getElementById("ShutDownGif").remove()
    }
    
    function Save(app) {
     LogWriteInfo("Saving data for app " + app)
     if(app == "Super Diamond Notepad") {
      localStorage.setItem("NotepadText", documet.getElementById("NotepadText").value)
     }
    }
    
    function setPassword(pass) {
     localStorage.setItem("Password", pass)
     Password = pass
    }
    
    function lock() {
     LogWriteInfo("locked Super Diamond OS to lockscreen Sucesfully")
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
     LogWriteInfo("opening change background prompt")
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
     LogWriteInfo("Background Changed Sucesfully")
    }
    
    function AddAppShortcut(img, text, app) {
     LogWriteInfo("Adding Shortcut for app: " + app + ", name: " + text + ", image url:" + img)
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
     LogWriteInfo("Opening Create Shortcut for app prompt")
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
 LogWriteInfo("getting clock content")
 return document.getElementById("timeText").innerHTML;
}

function sendRequest(url, data) {
 LogWriteInfo("sending postmessage request")
 var frame = document.createElement("iframe")
 frame.src = url
 frame.style.display = "none"
 document.body.appendChild(frame)
 const iframe = frame
 const wind = iframe.contentWindow
 wind.postMessage(data, "*")
}

function GPUDelay() {
  var speed = localStorage.getItem("GPUspeed")
  if(speed == null) {
   localStorage.setItem("GPUspeed", "" + Number.MAX_SAFE_INTEGER + "")
   localStorage.setItem("GPUname", "Super Diamond OS Default " + Number.MAX_SAFE_INTEGER + " GPU")
   speed = "" + Number.MAX_SAFE_INTEGER + ""
  }
  speed = parseInt(speed)
  var duration = 7000 / speed
  const start = Date.now();
  while (Date.now() - start < duration) {
   //empty loop to freeze code so GPU delay applies
  }
  setTimeout(GPUDelay, 2000)
}

GPUDelay()

LogWriteInfo("making pre-opened windows draggable")
    const windows = document.querySelectorAll(".window");
    windows.forEach(window => {
      makeDraggable(window);
    });
   const blackwindows = document.querySelectorAll(".windowblack");
    blackwindows.forEach(window => {
      makeDraggable(window);
    });
