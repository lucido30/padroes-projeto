"""Singleton example: configuration manager."""

class ConfigManager:
    _instance = None

    def __new__(cls):
        # __new__ guarantees only one instance is created.
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.settings = {"theme": "light"}
        return cls._instance

    def set(self, key, value):
        self.settings[key] = value

    def get(self, key):
        return self.settings.get(key)


if __name__ == "__main__":
    cfg1 = ConfigManager()
    cfg2 = ConfigManager()
    cfg1.set("language", "en")
    print(cfg2.get("language"))  # Prints "en", proving both references share state.
