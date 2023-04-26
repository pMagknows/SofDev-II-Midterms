interface CatalogSystem {
  title: string;
  author: string;
  genre: string;
  available: boolean;
  
  // method
  findItemLocation(): void;
  addItem(): void;
  getItem(): string[];
  removeItem(): void;
  getPrice(): number;
  getAuthor(): string;
  changePrice(): number;
  getTitle(): void;
  getGenre(): string;
  checkIfAvailable(): boolean;
}

class LibraryItem implements CatalogSystem {
  constructor(private _title: string, private _author: string, private _genre: string, private _available: boolean) {
    
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