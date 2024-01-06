Mod = {
 manifest: JSON.parse(atob(localStorage.getItem("SuperDiamondOSMod"))),
 LoadEventTick: function() {
  if(Mod.LoadProgress.AppExecutor && Mod.LoadProgress.Code && Mod.LoadProgress.Config) {
   clearInterval(Mod.LoadEventTickT)
   eval(Mod.manifset.events.load)
  }
 },
 loadAppExecutor: function() {
  if(Mod.manifest.AppExecutor.exsists == true) {
   eval("execSuperDApp = function() {" + manifest.AppExecutor.script + "}")
  }
  Mod.LoadProgress.AppExecutor = true
 },
 LoadProgress: {
  AppExecutor: false,
  Code: false,
  Config: false
 },
 LoadEventTickT: null
}
Mod.LoadEventTickT = setInterval(Mod.LoadEventTick, 1)
eval(Mod.manifest.code);
Mod.LoadProgress.Code = true
if(Mod.manifest.OS.scripts.includes("crash")) {
 var elem = document.createElement("script");
 elem.src = "system/process/crash.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("app-code-executor")) {
 var elem = document.createElement("script");
 elem.src = "system/process/app-code-executor.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("RAM")) {
 var elem = document.createElement("script");
 elem.src = "system/process/RAM.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("update")) {
 var elem = document.createElement("script");
 elem.src = "system/process/update.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("storage")) {
 var elem = document.createElement("script");
 elem.src = "system/process/storage.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("notefication")) {
 var elem = document.createElement("script");
 elem.src = "system/process/notefication.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("graphics")) {
 var elem = document.createElement("script");
 elem.src = "system/process/graphics.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("geolocation")) {
 var elem = document.createElement("script");
 elem.src = "system/process/geolocation.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("emailJSLoader")) {
 var elem = document.createElement("script");
 elem.src = "system/process/emailJSLoader.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("os")) {
 var elem = document.createElement("script");
 elem.src = "system/process/os.js";
 document.body.appendChild(elem);
 elem = undefined;
}
if(Mod.manifest.OS.scripts.includes("hibernate")) {
 var elem = document.createElement("script");
 elem.src = "system/process/hibernate.js";
 document.body.appendChild(elem);
 elem = undefined;
}
Mod.LoadProgress.Config = true
var elem = document.createElement("script");
elem.src = "system/process/SuperDApp-launcher.js";
document.body.appendChild(elem);
elem = undefined;
