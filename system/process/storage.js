var Storage = {
 setItem: async function(name, value) {
  var value = await localforage.setItem(name, value);
  return value;
 },
 getItem: async function(name) {
  var value = await localforage.setItem(name);
  return value;
 }
}
