window.onerror = function (message, source, lineno, colno, error) {
  location.replace("bluescreen.html?message=" + encodeURI(message) + "&source=" + encodeURI(source) + "&lineno=" + encodeURI(lineno) + "&colno=" + encodeURI(colno) + "&error" + encodeURI(error.toString()) + "&stack=" + encodeURI(error.stack))
};

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
