LogWriteInfo("Starting Task: system/process/RAM.js")
LogWriteInfo("Initalizing RAM Control...")
const RAM = {
 TextRAM: {
  setValue: function(name, value) {
   LogWriteInfo("Setting Textram value for " + name + " as " + value)
   LogWriteInfo("Initalizing Create New checker variable")
   var shouldCreateNew = true
   LogWriteInfo("Checking for exsisting data")
   Array.from(document.getElementById('TextRAM').children).forEach(data => {
    if(data.getAttribute("name") == name) {
     LogWriteInfo("Exsisting found. etting Create New Checker Variabe to false")
     shouldCreateNew = false
     LogWriteInfo("overwriting data")
     data.setAttribute("value", value)
     LogWriteInfo("Data overwriten sucesfully")
    }
   });
   if(shouldCreateNew) {
    LogWriteInfo("no exsiting data was found. creating TextRAM data element")
    var Elem = document.createElement("data")
    LogWriteInfo("TextRAM data element created. writing data")
    Elem.setAttribute("name", name)
    Elem.setAttribute("value", value)
    LogWriteInfo("Data writen. adding to TextRAM category")
    document.getElementById("TextRAM").appendChild(Elem)
    LogWriteInfo("Added to TextRAM category sucesfully")
   }
  },
  getValue: function(name) {
   LogWriteInfo("Getting TextRAM value for " + name)
   LogWriteInfo("Initalizing does not exsist checker variable")
   var doesNotExsist = true
   LogWriteInfo("Checking for TextRAM element")
   Array.from(document.getElementById('TextRAM').children).forEach(data => {
    if(data.getAttribute("name") == name) {
     LogWriteInfo("TextRAM data element found. setting does not exsist checker variable to false")
     doesNotExsist = false
     LogWriteInfo("reading value")
     var value = data.getAttribute("value");
    }
   });
   if(doesNotExsist) {
    LogWriteInfo("TextRAM element not found. giving undefined")
    LogWriteERR("Text by name " + name + " does not exsist in TextRAM. letting pass with undefined")    
    var value = undefined;
   }
   LogWriteInfo("Read TextRAM data task completed with return " + value)
   return value;
  }
 },
 ScriptRAM: {
  execute: function(code) {
   LogWriteInfo("Executing code: " + code + " as ScriptRAM")
   LogWriteInfo("Creating Script Element")
   var Elem = document.createElement("script")
   LogWriteInfo("Setting Code")
   Elem.innerHTML = code
   LogWriteInfo("Executing and adding to ScriptRAM category")
   document.getElementById('ScriptRAM').appendChild(Elem)
   LogWriteInfo("Sucesfully Executed ScriptRAM")
  }
 }
}
LogWriteInfo("RAM Control initalized")
LogWriteInfo("Listening For RAM data change requests")
