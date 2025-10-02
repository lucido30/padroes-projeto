<<<<<<< ours
// Decorator example: add formatting to a text printer.
=======
>>>>>>> theirs
class TextPrinter {
  render(text) {
    return text;
  }
}

class PrinterDecorator extends TextPrinter {
<<<<<<< ours
  // Base decorator wraps another printer and delegates calls.
=======
>>>>>>> theirs
  constructor(printer) {
    super();
    this.printer = printer;
  }

  render(text) {
    return this.printer.render(text);
  }
}

class BoldPrinter extends PrinterDecorator {
  render(text) {
    return `**${super.render(text)}**`;
  }
}

class UnderlinePrinter extends PrinterDecorator {
  render(text) {
    return `__${super.render(text)}__`;
  }
}

if (require.main === module) {
  const printer = new UnderlinePrinter(new BoldPrinter(new TextPrinter()));
  console.log(printer.render("Hello"));
}

module.exports = {
  TextPrinter,
  PrinterDecorator,
  BoldPrinter,
  UnderlinePrinter,
};
