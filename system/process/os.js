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
    LogWriteInfo("checking logged in")
    if(localStorage.getItem("Password") !== null) {
     if(getCookie("loggedIn") !== "itis") {
      location.replace("computer-login.html")
     }
    } else {
     location.replace("computer-setup.html")
    }
    refreshDesktopBG()
    LogWriteInfo("doing some startup actions")
    //AntiVirusPermissionRequest()
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

function refreshDesktopBG() {
    LogWriteInfo("setting desktop background")
    if(backgroundIsImage == "true") {
     try {
         document.getElementById("desktop").style.backgroundImage = "url('" + background + "')";
     } catch(err) {
        LogWriteWarn("Failed to set background image to selected image url. retrying in 3 seconds");
        LogWriteWarn(err.toString());
        setTimeout(3000, refreshDesktopBG);
        return;
     }
    }
    if(backgroundIsImage == "false") {
     try {
         document.getElementById("desktop").style.backgroundColor = background
     } catch(err) {
        LogWriteWarn("Failed to set background color to selected color. retrying in 3 seconds");
        LogWriteWarn(err.toString());
        setTimeout(3000, refreshDesktopBG);
        return;
     }
    }
    if(background == null) {
     try {
        document.getElementById("desktop").style.backgroundImage = "url('SuperDiamond.png')";
     } catch(err) {
        LogWriteWarn("Failed to set background image to default. retrying in 3 seconds");
        LogWriteWarn(err.toString());
        setTimeout(3000, refreshDesktopBG);
        return;
     }
     background = "SuperDiamond.png"
     backgroundIsImage = "true"
    }
    if(backgroundIsImage == null) {
     try {
        document.getElementById("desktop").style.backgroundImage = "url('SuperDiamond.png')";
     } catch(err) {
        LogWriteWarn("Failed to set background image to default. retrying in 3 seconds");
        LogWriteWarn(err.toString());
        setTimeout(3000, refreshDesktopBG);
        return;
     }
     background = "SuperDiamond.png"
     backgroundIsImage = "true"
    }
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
    if(homeMenu == null) {
       LogWriteInfo("Failed to open home menu as home menu could not be found")
       return;
    }
    homeMenu.style.display = "block"
    homeMenu.src = "Super Diamond OS_files/updateCheckerApi.js"
    homeMenu.src = "Super Diamond OS_files/home.html"
   }

window.onclick = function(event) {
  try {
   if (event.target !== document.getElementById("homeMenu") && event.target !== document.getElementById("taskbarbtn.homemenu") && document.getElementById("homeMenu").style.display == "block") {
    LogWriteInfo("closing home menu")
    document.getElementById("homeMenu").style.display = "none";
   }
  } catch(err) {
     LogWriteWarn("Failed to handle onclick event for homemenu")
     LogWriteWarn(err)
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

    function loadSuperDAppUpload() {
       try {
          document.getElementById('SuperDAppUpload').addEventListener('change', handleSuperDAppUpload);
       } catch(err) {
          LogWriteWarn("Failed to add the Event Listener to SuperDAppUpload. Retrying in 3 seconds.")
          setTimeout(3000, loadSuperDAppUpload)
       }
    }
    loadSuperDAppUpload()
       
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
      menu = document.getElementById("menu")
      menu.style.left = x + "px";
      menu.style.top = y + "px";
      menu.style.display = "block";
      document.addEventListener("click", hideMenu);
    }

    function hideMenu() {
      menu = document.getElementById("menu")
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
  var clockelem = document.getElementById("timeText")
  if (clockelem) {
      document.getElementById('timeText').innerHTML =  h + ":" + m + ":" + s;
  }
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
