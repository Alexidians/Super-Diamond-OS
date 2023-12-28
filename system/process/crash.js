    function Crash(crash) {
     crashInterval = setInterval(CrashAct, 0, crash)
     setTimeout(CrashMiddle, 5000)
    }
    function CrashMiddle() {
     clearInterval(crashInterval)
     document.getElementById("desktop").remove()
     var png = document.createElement("img")
     png.src = "pc-error.png"
     png.width = "2280"
     png.height = "1500"
     png.id = "CrashPng"
     document.body.appendChild(png)
     setTimeout(CrashEnd, 10000)
    }
    function CrashEnd() {
     document.getElementById("CrashPng").remove()
     document.body.style.backgroundColor = "black";
    }
    function CrashAct(error) {
     ErrorMessage(error)
     WarningMessage(error)
    }
