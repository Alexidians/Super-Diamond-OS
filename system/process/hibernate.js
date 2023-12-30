function hibernate() {
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

    setSystemItem('AppRAM', JSON.stringify(AppRAMArray));
    setSystemItem('TextRAM', JSON.stringify(TextRAMArray));
    setSystemItem('ScriptRAM', JSON.stringify(ScriptRAMArray));
    setSystemItem('washibernated', 'true');
    ShutDown()
}

function loadRAMFromHibernation() {

    if (localStorage.getItem('washibernated') === 'true') {
        const AppRAMArray = JSON.parse(getSystemItem('AppRAM'));
        const TextRAMArray = JSON.parse(getSystemItem('TextRAM'));
        const ScriptRAMArray = JSON.parse(getSystemItem('ScriptRAM'));
        const appsDiv = document.getElementById('Apps');
        const TextRAMDiv = document.getElementById('TextRAM');
        const ScriptRAMDiv = document.getElementById('ScriptRAM');

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
    }
    setSystemItem('washibernated', 'false');
}


window.addEventListener('load', loadRAMFromHibernation);
