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
if(localStorage.getItem("Mod") !== null) {
var elem = document.createElement("script");
elem.src = "system/process/modLoader.js";
document.body.appendChild(elem);
elem = undefined;
}
else {
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
if(Mod.manifest.OS.scripts.includes("notefication")) {
var elem = document.createElement("script");
elem.src = "system/process/notefication.js";
document.body.appendChild(elem);
elem = undefined;
var elem = document.createElement("script");
elem.src = "system/process/graphics.js";
document.body.appendChild(elem);
elem = undefined;
var elem = document.createElement("script");
elem.src = "system/process/os.js";
document.body.appendChild(elem);
elem = undefined;
var elem = document.createElement("script");
elem.src = "system/process/os.js";
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
Mod.LoadProgress.Config = true
var elem = document.createElement("script");
elem.src = "system/process/SuperDApp-launcher.js";
document.body.appendChild(elem);
elem = undefined;
}
