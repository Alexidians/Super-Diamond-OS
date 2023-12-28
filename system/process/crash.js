window.onerror = function (message, source, lineno, colno, error) {
  location.replace("bluescreen.html?message=" + encodeURI(message) + "&source=" + encodeURI(source) + "&lineno=" + encodeURI(lineno) + "&colno=" + encodeURI(colno) + "&error" + encodeURI(error))
};
