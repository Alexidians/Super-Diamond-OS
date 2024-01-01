var graphics = {
 Error: function(msg) {
  return SuperDiamondOSErrors.graphicsError(msg);
 }
}
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
