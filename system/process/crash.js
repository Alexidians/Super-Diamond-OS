LogWriteInfo("Starting Task: system/process/crash.js")
LogWriteInfo("initalizing bluescreen error catcher")
window.onerror = function (message, source, lineno, colno, error) {
  LogWriteInfo("initalizing bluescreen");
  LogWriteFatalERR("bluescreen detected: message: " + message + ", source: " + source + ", lineno: " + lineno + ", colno: " + colno + ", error: " + error.toString() + ", stack: " + error.stack);
  if(localStorage.getItem("disable_bluescreen") == "true") {
    LogWriteWarn("Bluescreen Is Disabled. Not showing bluescreen.");
  } else {
  location.replace("bluescreen.html?message=" + encodeURI(message) + "&source=" + encodeURI(source) + "&lineno=" + encodeURI(lineno) + "&colno=" + encodeURI(colno) + "&error" + encodeURI(error.toString()) + "&stack=" + encodeURI(error.stack));
  }
  };
LogWriteInfo("now listening for bluescreens")
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
 }
}
LogWriteInfo("SuperDiamondOSErrors object initalized sucesfully.")
