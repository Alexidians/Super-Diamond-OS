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
          console.log(`System item '${key}' set to: ${value}`);
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
          console.log(`System item '${key}' deleted.`);
        } catch (error) {
          console.error('Error deleting system item:', error);
        }
      }
    }

    const SDStorage = new SuperDiamondOSDatabase();
