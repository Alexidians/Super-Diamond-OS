LogWriteInfo("Starting Task: system/process/hibernate.js")
LogWriteInfo("initalizing hibernator")
function hibernate() {
    OpenApp("HibernateMenu")
}
function hibernatefunc(type) {
    LogWriteInfo("hibernating")
    LogWriteInfo("getting data")
    if(type == "full_page") {
          const content = document.documentElement.outerHTML;
          localStorage.setItem("HTMLContentHibernate", content);
          LogWriteInfo("Page hibernated to localStorage!");
    }
    if(type == "App_Text_Script_RAM_Save") {
    const appsDiv = document.getElementById('Apps');
    const TextRAMDiv = document.getElementById('TextRAM');
    const ScriptRAMDiv = document.getElementById('ScriptRAM');
    const AppRAMArray = [];
    const TextRAMArray = [];
    const ScriptRAMArray = [];
    
    Array.from(appsDiv.children).forEach(application => {
        AppRAMArray.push({
            id: application.id,
            content: application.innerHTML,
            windowWidth: application.style.width,
            windowHeight: application.style.height
        });
    });
    Array.from(TextRAMDiv.children).forEach(data => {
        TextRAMArray.push({
            name: data.getAttribute("name"),
            value: data.getAttribute("value"),
        });
    });
    Array.from(ScriptRAMDiv.children).forEach(script => {
        ScriptRAMArray.push({
            code: script.text,
        });
    });
    LogWriteInfo("saving data")
    localStorage.setItem('AppRAM', JSON.stringify(AppRAMArray));
    localStorage.setItem('TextRAM', JSON.stringify(TextRAMArray));
    localStorage.setItem('ScriptRAM', JSON.stringify(ScriptRAMArray));
    } else {
        LogWriteError("Unknown Hibernation Mode:", type)
    }
    LogWriteInfo("setting hibernation status")
    localStorage.setItem('washibernated', 'true');
    LogWriteInfo("shutting down")
    ShutDown()
}
LogWriteInfo("initalizing hibernate wake uper")
function loadRAMFromHibernation() {
    LogWriteInfo("waking up from hibernation...")
    LogWriteInfo("checking if hibernation was done...")
    if (localStorage.getItem('washibernated') === 'true') {
        if (localStorage.HTMLContentHibernate !== null) {
              const savedContent = localStorage.getItem("HTMLContentHibernate");
              if (savedContent) {
                document.open();
                document.write(savedContent);
                document.close();
              }
              localStorage.removeItem("HTMLContentHibernate")
        } else {
        LogWriteInfo("getting hibernation data")
        const AppRAMArray = JSON.parse(localStorage.getItem('AppRAM'));
        const TextRAMArray = JSON.parse(localStorage.getItem('TextRAM'));
        const ScriptRAMArray = JSON.parse(localStorage.getItem('ScriptRAM'));
        const appsDiv = document.getElementById('Apps');
        const TextRAMDiv = document.getElementById('TextRAM');
        const ScriptRAMDiv = document.getElementById('ScriptRAM');
        LogWriteInfo("writing data to session")
        appsDiv.innerHTML = ""
        AppRAMArray.forEach(application => {
            const App = document.createElement('div');
            App.class = "window";
            App.style.width = application.windowWidth;
            App.style.height = application.windowHeight;
            App.style.backgroundColor = "#fff";
            App.style.border = "1px solid #ccc";
            App.style.position = "absolute";
            App.style.top = "100px";
            App.style.left = "100px";
            App.style.cursor = "move";
            App.id = application.id;
            App.innerHTML = application.content;
            appsDiv.appendChild(App);
            makeDraggable(App)
            const scripts = App.querySelectorAll('script');
            scripts.forEach(script => {
             const newScript = document.createElement('script');
             newScript.text = script.text;
             document.head.appendChild(newScript)
             document.head.removeChild(newScript);
            });
        });

        TextRAMDiv.innerHTML = ""
        TextRAMArray.forEach(data => {
            const Elem = document.createElement('data');
            Elem.setAttribute("name", data.name)
            Elem.setAttribute("value", data.value)
            TextRAMDiv.appendChild(Elem)
        });

        ScriptRAMDiv.innerHTML = ""
        ScriptRAMArray.forEach(script => {
            const Elem = document.createElement('script');
            Elem.innerHTML = script.code
            ScriptRAMDiv.appendChild(Elem)
        });
        LogWriteInfo("waken up sucesfully")
        }
    }
    LogWriteInfo("setting hibernation status to not hibernated")
    localStorage.setItem('washibernated', 'false');
}

LogWriteInfo("setting auto wakeup on startup...")
window.addEventListener('load', loadRAMFromHibernation);
LogWriteInfo("auto wakeup enabled sucesfully")
