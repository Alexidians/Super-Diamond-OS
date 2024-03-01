LogWriteInfo("Starting Task: system/process/storage.js")
LogWriteInfo("Initalizing Storage Object")
var Storage = {
 setItem: async function(name, value) {
  LogWriteInfo("setting storage key " + name + " value to " + value)
  var value = await localforage.setItem(name, value);
  return value;
 },
 getItem: async function(name) {
  LogWriteInfo("Getting Storage key " + name + " value")
  var value = await localforage.setItem(name);
  return value;
 }
}
LogWriteInfo("Storage Object initalized Sucesfully")
LogWriteInfo("Now listening for storage requests")
