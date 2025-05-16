LogWriteInfo("Starting Task: system/process/crash.js")
LogWriteInfo("initalizing bluescreen error catcher")
window.onerror = function (message, source, lineno, colno, error) {
  Crash(message, source, lineno, colno, error)
};
LogWriteInfo("now listening for bluescreens")
LogWriteInfo("Loading Bluescreen Helper Functions")
function Crash(message = "Unknown Error Occoured", source = "Unknown", lineno = NaN, colno = NaN, error = null, force = false) {
 if(error == null) {
   error = SuperDiamondOSErrors.unknownError(message)
 }
 error.source = source
 error.lineno = lineno
 error.colno = colno
  LogWriteInfo("initalizing bluescreen");
  LogWriteFatalERR("bluescreen detected: message: " + message + ", source: " + source + ", lineno: " + lineno + ", colno: " + colno + ", error: " + error.toString() + ", stack: " + error.stack);
  if(localStorage.getItem("disable_bluescreen") == "true" & !force) {
    LogWriteWarn("Bluescreen Is Disabled. Not showing bluescreen.");
  } else {
   location.replace("bluescreen.html?message=" + encodeURI(message) + "&source=" + encodeURI(source) + "&lineno=" + encodeURI(lineno) + "&colno=" + encodeURI(colno) + "&error" + encodeURI(error.toString()) + "&stack=" + encodeURI(error.stack));
  }
}
LogWriteInfo("initalizing SuperDiamondOSErrors object")
var SuperDiamondOSErrors = {
 graphicsError: function(msg) {
  var Err = new Error(msg)
  Err.name = "graphicsError"
  Err.code = "GRAPHICS_ERR"
  Err.message = "graphicsError: " + msg
  Err.lineNumber = NaN
  Err.columnNumber = NaN
  Err.fileName = "https://alexidians.github.io/Super-Diamond-OS/system/process/graphics.js"
  return Err;
 },
 unknownError: function(msg = "Unknown Error Occoured") {
  var Err = new Error(msg)
  Err.name = "unknownError"
  Err.code = "UNKNOWN_ERR"
  Err.message = "unknownError: " + msg
  Err.lineNumber = NaN
  Err.columnNumber = NaN
  Err.fileName = "https://alexidians.github.io/Super-Diamond-OS/system/process/graphics.js"
  return Err;
 }
}
LogWriteInfo("SuperDiamondOSErrors object initalized sucesfully.")
