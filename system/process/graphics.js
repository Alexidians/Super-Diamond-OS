LogWriteInfo("Starting Task: system/process/graphics.js")
LogWriteInfo("initalizing graphics object")
var graphics = {
 Error: function(msg) {
  LogWriteInfo("initalizing graphics error object")
  return SuperDiamondOSErrors.graphicsError(msg);
 }
}
LogWriteInfo("initalized graphics object sucesfully")
LogWriteInfo("Listening for graphics object requests")
