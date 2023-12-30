    class SuperDiamondOSDatabase extends Dexie {
      constructor() {
        super('SUPER_DIAMOND_OS');
        this.version(1).stores({
          system: '++id, key, value',
        });
      }

      async setSystemItem(key, value) {
        try {
          await this.system.put({ key, value });
        } catch (error) {
          console.error('Error setting system item:', error);
        }
      }

      async getSystemItem(key) {
        try {
          const result = await this.system.where({ key }).first();
          return result ? result.value : null;
        } catch (error) {
          console.error('Error getting system item:', error);
          return null;
        }
      }

      async deleteSystemItem(key) {
        try {
          await this.system.where({ key }).delete();
        } catch (error) {
          console.error('Error deleting system item:', error);
        }
      }
    }

    const SDStorageDB = new SuperDiamondOSDatabase();
    async function deleteSystemItem(key) {
      await SDStorageDB.deleteSystemItem(key);
    };
    async function getSystemItem(key) {
      return await SDStorageDB.getSystemItem(key);
    };
    async function setSystemItem(key, value) {
      await SDStorageDB.setSystemItem(key, value);
    };
