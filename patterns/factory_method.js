class Document {
  export() {
    throw new Error("Method export() must be implemented");
  }
}

class PDFDocument extends Document {
  export() {
    return "PDF content";
  }
}

class WordDocument extends Document {
  export() {
    return "Word content";
  }
}

class DocumentCreator {
  createDocument() {
    throw new Error("Method createDocument() must be implemented");
  }

  deliver() {
    const doc = this.createDocument();
    return `Delivering ${doc.export()}`;
  }
}

class PDFCreator extends DocumentCreator {
  createDocument() {
    return new PDFDocument();
  }
}

class WordCreator extends DocumentCreator {
  createDocument() {
    return new WordDocument();
  }
}

if (require.main === module) {
  console.log(new PDFCreator().deliver());
  console.log(new WordCreator().deliver());
}

module.exports = {
  Document,
  PDFDocument,
  WordDocument,
  DocumentCreator,
  PDFCreator,
  WordCreator,
};
