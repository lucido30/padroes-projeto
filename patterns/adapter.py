"""Adapter example: unify legacy and new processor interfaces."""

class LegacyService:
    def run_legacy(self) -> str:
        return "legacy result"

class ModernClient:
    def __init__(self, processor):
        self.processor = processor

    def show(self):
        print(self.processor.process())

class LegacyAdapter:
    # Adapter translates the expected process() call to run_legacy().
    def __init__(self, legacy: LegacyService):
        self.legacy = legacy

    def process(self) -> str:
        return self.legacy.run_legacy()

if __name__ == "__main__":
    client = ModernClient(LegacyAdapter(LegacyService()))
    client.show()
