LogWriteInfo("Starting Task: system/process/app-code-executer.js")
LogWriteInfo("initalizing iframe window application os interacrion environment")
window.addEventListener("message", function (e) {
     if(new URL(e.origin).protocol !== "https:" && new URL(e.origin).protocol !== "http:" && new URL(e.origin).protocol !== "file:") {
       return;
     }
     eval(e.data)
    })
LogWriteInfo("iframe window application os interacrion environment initalized sucesfully")
LogWriteInfo("listening for iframe window application os interacrion requests")
LogWriteInfo("Loading OpenApp Function")
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
      AppShutDownButton.onclick = function() {
           try {
               if(document.getElementById("TaskManagerShutDownInput")) {
               ShutDownApp(document.getElementById("TaskManagerShutDownInput").value)
               } else {
                    WriteLogERR("Could not Locate Input for application name")
               }
           } catch(err) {
                WriteLogERR("Failed to Terminate Specified Application")
                WriteLogERR(err.toString())
                console.error(err)
           }
      }
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
      makeDraggable(App)
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
      makeDraggable(App)
      ShutDownApp("Super Diamond Virus")
      WarningMessage("(Super Diamond Anti-Virus) We Detected a Virus On Your Device [Super Diamond Virus]")
      var RemoveVirus = confirm("(Super Diamond Anti-Virus) Stop Super Diamond Virus?")
      if(RemoveVirus) {
       clearInterval(SuperDiamondVirusInterval)
       HasSuperDiamondVirus = false
       OSMessage("(Super Diamond Anti-Virus) The Virus was Removed Sucessfully.")
       WarningMessage("(Super Diamond Anti-Virus) The Virus Might of already Done Something to your device")
       OSMessage("(Super Diamond Virus) HAHAHA! You didnt beat me. I Will Start Destroying your system now!")
      } else {
       WarningMessage("Oh no you sd virus anti-viurs didnt touch me oh no oh no i will destroy your system now.")
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
      makeDraggable(App)
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
    if(AppName == "HibernationMenu") {
      App.id = "HibernationMenu"
      var AppFrame = document.createElement("iframe")
      AppTitle.InnerHTML = "Hibernate"
      AppTitle.appendChild(AppTitleTextNode)
      App.appendChild(AppTitle)
      App.appendChild(AppFrame)
      AppFrame.id = "Browser"
      AppFrame.src = "system/app/hibernationmenu.html"
      AppFrame.width = "600"
      AppFrame.height = "500"
      document.getElementById("Apps").appendChild(App)
      makeDraggable(App)
     }
    }
LogWriteInfo("OpenApp function has been loaded.")
