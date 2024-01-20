var Storage = {
 System: {
  set: async function(key, value) {
   return new Promise((resolve, reject) => {
    try {
     await Storage.db.SystemStorage.put(value, key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  },
  get: async function(key) {
   return new Promise((resolve, reject) => {
    try {
     var value = await Storage.db.SystemStorage.get(key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  }
 },
 App: {
  set: async function(key, value) {
   return new Promise((resolve, reject) => {
    try {
     await Storage.db.AppStorage.put(value, key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  },
  get: async function(key) {
   return new Promise((resolve, reject) => {
    try {
     var value = await Storage.db.AppStorage.get(key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  }
 },
 Mod: {
  set: async function(key, value) {
   return new Promise((resolve, reject) => {
    try {
     await Storage.db.ModStorage.put(value, key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  },
  get: async function(key) {
   return new Promise((resolve, reject) => {
    try {
     var value = await Storage.db.ModStorage.get(key);
     resolve({status: "sucess", data: {name: key, value: value}});
    } catch(err) {
     resolve({status: "failed", data: err});
    }
   });
  }
 }
}
Storage.db = new Dexie("SUPER_DIAMOND_OS");
Storage.db.version(1).stores({
	SystemStorage: '',
    AppStorage: '',
    ModStorage: ''
});
