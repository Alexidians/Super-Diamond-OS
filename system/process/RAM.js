const RAM = {
 TextRAM: {
  setValue: function(name, value) {
   var shouldCreateNew = true
   Array.from(document.getElementById('TextRAM').children).forEach(data => {
    if(data.getAttribute("name") == name) {
     shouldCreateNew = false
     data.setAttribute("value", value)
    }
   });
   if(shouldCreateNew) {
    var Elem = document.createElement("data")
    Elem.setAttribute("name", name)
    Elem.setAttribute("value", value)
    document.getElementById("TextRAM").appendChild(Elem)
   }
  },
  getValue: function(name) {
   var doesNotExsist = true
   Array.from(document.getElementById('TextRAM').children).forEach(data => {
    if(data.getAttribute("name") == name) {
     doesNotExsist = false
     var value = data.getAttribute("value");
    }
   });
   if(doesNotExsist) {
    console.error("Text by name " + name + " does not exsist in TextRAM. letting pass with undefined")
    var value = undefined;
   }
   return value;
  }
 },
 ScriptRAM: {
  execute: function(code) {
   var Elem = document.createElement("script")
   Elem.innerHTML = code
   document.getElementById('ScriptRAM').appendChild(Elem)
  }
 }
}
