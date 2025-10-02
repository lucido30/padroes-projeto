<<<<<<< ours
// Singleton example: configuration manager.
=======
>>>>>>> theirs
class ConfigManager {
  constructor() {
    if (ConfigManager.instance) {
      return ConfigManager.instance;
    }

    this.settings = { theme: "light" };
    ConfigManager.instance = this;
    return this;
  }

  set(key, value) {
    this.settings[key] = value;
  }

  get(key) {
    return this.settings[key];
  }
}

ConfigManager.instance = null;

if (require.main === module) {
  const cfg1 = new ConfigManager();
  const cfg2 = new ConfigManager();
  cfg1.set("language", "en");
<<<<<<< ours
  console.log(cfg2.get("language")); // Prints "en", proving both references share state.
=======
  console.log(cfg2.get("language"));
>>>>>>> theirs
}

module.exports = { ConfigManager };
