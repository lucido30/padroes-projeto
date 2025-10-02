"""Observer example: subject notifies dependents of state changes."""

class Subject:
    def __init__(self):
        self._observers = []
        self._state = None

    def attach(self, observer):
        self._observers.append(observer)

    def set_state(self, value):
        self._state = value
        for observer in self._observers:  # Notify each observer.
            observer.update(value)

class PrintObserver:
    def __init__(self, name):
        self.name = name

    def update(self, value):
        print(f"{self.name} received: {value}")

if __name__ == "__main__":
    subject = Subject()
    subject.attach(PrintObserver("Logger"))
    subject.attach(PrintObserver("Dashboard"))
    subject.set_state("READY")
