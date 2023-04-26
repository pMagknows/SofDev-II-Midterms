interface CatalogSystem {
  title: string;
  author: string;
  genre: string;
  available: boolean;
  location: string,
  price: number;
  
  // methods
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
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public available: boolean,
    public location: string,
    public price: number
  ) {}

  findItemLocation(): void {
    console.log(`The location of "${this.title}" is ${this.getLocation()}.`);
  }

  addItem(): void {
    console.log(`"${this.title}" has been added to the library catalog.`);
  }

  getItem(): string[] {
    return [this.title, this.author, this.genre];
  }

  removeItem(): void {
    console.log(`"${this.title}" has been removed from the library catalog.`);
  }

  getPrice(): number {
    return 0; // replace with actual implementation
  }

  getAuthor(): string {
    return this.author;
  }

  changePrice(): number {
    return 0; // replace with actual implementation
  }

  getTitle(): void {
    console.log(`The title of this item is "${this.title}".`);
  }

  getGenre(): string {
    return this.genre;
  }

  checkIfAvailable(): boolean {
    return this.available;
  }
  
  protected getLocation(): string {
    return 'Unknown'; // replace with actual implementation
  }
}

class Book extends LibraryItem {
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public publisher: string,
    public ISBN: string,
    public numberOfPages: number,
    public location: string,
    public available: boolean,
    public price: number
  ) {
    super(title, author, genre, available, location, price);
  }

  protected getLocation(): string {
    return this.location;
  }
}

class DVD extends LibraryItem {
  constructor(
    public title: string,
    public director: string,
    public genre: string,
    public actors: string[],
    public duration: number,
    public rating: string,
    public location: string,
    public available: boolean,
    public price: number
  ) {
    super(title, director, genre, available, location, price);
  }

  protected getLocation(): string {
    return this.location;
  }
}
