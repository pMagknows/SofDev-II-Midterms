interface CatalogSystem {
  title: string;
  author: string;
  genre: string;
  available: boolean;
}

class LibraryItem implements CatalogSystem {
  constructor(title: string, author: string, genre: string, available: boolean) {
    }
}

class Book extends LibraryItem {
  constructor(public title: string, public author: string, public genre: string, public publisher: string, public ISBN: string, public numberOfPages: number, public location: string, public available: boolean) {
      super(title, location, genre, available);
  }
}

class DVD extends LibraryItem {
  constructor(public title: string, public director: string, public genre: string, public actors: string[], public duration: number, public rating: string, public location: string, public available: boolean) {
      super(title, location, genre, available);
  }
}