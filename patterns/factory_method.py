# Factory Method example: document exporter.
from abc import ABC, abstractmethod
class Document(ABC):
    @abstractmethod
    def export(self) -> str: ...
class PDFDocument(Document):
    def export(self) -> str: return "PDF content"
class WordDocument(Document):
    def export(self) -> str: return "Word content"
class DocumentCreator(ABC):
    @abstractmethod
    def create_document(self) -> Document: ...  # Subclasses decide the concrete product.
    def deliver(self) -> str:
        doc = self.create_document()
        return f"Delivering {doc.export()}"
class PDFCreator(DocumentCreator):
    def create_document(self) -> Document: return PDFDocument()
class WordCreator(DocumentCreator):
    def create_document(self) -> Document: return WordDocument()
if __name__ == "__main__":
    print(PDFCreator().deliver())
    print(WordCreator().deliver())
