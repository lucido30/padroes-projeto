class Subject {
  constructor() {
    this._observers = [];
    this._state = null;
  }

  attach(observer) {
    this._observers.push(observer);
  }

  setState(value) {
    this._state = value;
    for (const observer of this._observers) {
      observer.update(value);
    }
  }
}

class PrintObserver {
  constructor(name) {
    this.name = name;
  }

  update(value) {
    console.log(`${this.name} received: ${value}`);
  }
}

if (require.main === module) {
  const subject = new Subject();
  subject.attach(new PrintObserver("Logger"));
  subject.attach(new PrintObserver("Dashboard"));
  subject.setState("READY");
}

module.exports = { Subject, PrintObserver };
