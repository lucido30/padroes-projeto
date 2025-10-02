"""Decorator example: add formatting to a text printer."""

class TextPrinter:
    def render(self, text: str) -> str:
        return text

class PrinterDecorator(TextPrinter):
    # Base decorator wraps another printer and delegates calls.
    def __init__(self, printer: TextPrinter):
        self.printer = printer

    def render(self, text: str) -> str:
        return self.printer.render(text)

class BoldPrinter(PrinterDecorator):
    def render(self, text: str) -> str:
        return f"**{super().render(text)}**"

class UnderlinePrinter(PrinterDecorator):
    def render(self, text: str) -> str:
        return f"__{super().render(text)}__"

if __name__ == "__main__":
    printer = UnderlinePrinter(BoldPrinter(TextPrinter()))
    print(printer.render("Hello"))
