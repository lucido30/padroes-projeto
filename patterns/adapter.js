class LegacyService {
  runLegacy() {
    return "legacy result";
  }
}

class ModernClient {
  constructor(processor) {
    this.processor = processor;
  }

  show() {
    console.log(this.processor.process());
  }
}

class LegacyAdapter {
  constructor(legacy) {
    this.legacy = legacy;
  }

  process() {
    return this.legacy.runLegacy();
  }
}

if (require.main === module) {
  const client = new ModernClient(new LegacyAdapter(new LegacyService()));
  client.show();
}

module.exports = { LegacyService, ModernClient, LegacyAdapter };
