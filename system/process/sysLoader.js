var log = ""
let logFileHandle = null
async function chooseLogFile() {
  try {
    [logFileHandle] = await window.showOpenFilePicker();
  } catch (err) {
    LogWriteERR(err);
    return;
  }

  LogWriteInfo("Sucesfully Updated The Log File to write")
}
function writeLogToFile() {
 if(logFileHandle !== null) {
  const writable = await logFileHandle.createWritable()
  writable.write(log)
  writable.close()
 }
}
function LogWriteWarn(text) {
 log = log + "[WARN] " + text + "\n"
 writeLogToFile()
}
LogWriteWarn("Log Warning ([WARN]) has been initalized.")
function LogWriteInfo(text) {
 log = log + "[INFO] " + text + "\n"
 writeLogToFile()
}
LogWriteInfo("Log Info ([INFO]) has been initalized.")
function LogWriteERR(text) {
 log = log + "[ERR] " + text + "\n"
 writeLogToFile()
}
LogWriteInfo("Log Error ([ERR]) has been initalized.")
function LogWriteFatalERR(text) {
 log = log + "[Fatal_ERR] " + text + "\n"
 writeLogToFile()  
}
LogWriteInfo("Log Fatal Error ([FATAL_ERR]) has been initalized.")
LogWriteInfo("Starting Task: system/process/sysLoader.js")
LogWriteInfo("Initalizing Empty Mod")
var Mod = {
 manifest: {},
 LoadEventTick: function() {},
 loadAppExecutor: function() {},
 LoadProgress: {
  AppExecutor: false,
  Code: false,
  Config: false
 },
 LoadEventTickT: null
}
LogWriteInfo("Checking For Mods")
LogWriteInfo("Reading local/localStorage/SuperDiamondOSMod")
if(localStorage.getItem("SuperDiamondOSMod") !== null) {
 LogWriteInfo("Mods Found. starting task system/process/modLoader.js")
 var elem = document.createElement("script");
 elem.src = "system/process/modLoader.js";
 document.body.appendChild(elem);
 elem = undefined;
}
else {
 LogWriteInfo("No Mods Found. Starting Vanilla Super Diamond OS")
 var elem = document.createElement("script");
 elem.src = "system/process/crash.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/app-code-executor.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/RAM.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/update.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/storage.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/notefication.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/graphics.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/geolocation.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/emailJSLoader.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/os.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/hibernate.js";
 document.body.appendChild(elem);
 elem = undefined;
 var elem = document.createElement("script");
 elem.src = "system/process/SuperDApp-launcher.js";
 document.body.appendChild(elem);
 elem = undefined;
}
LogWriteInfo("Terminating Task: system/process/sysLoader.js")
