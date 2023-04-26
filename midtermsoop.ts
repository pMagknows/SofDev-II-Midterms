interface CatalogSystem {
  // attributes
  title: string;
  author: string;
  genre: string;
  available: boolean;
  
  // methods
  findItemLocation(): void;
  addItem(): void;
  getItem(id: number): string[];
  removeItem(): void;
}

class LibraryItem implements CatalogSystem {
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public available: boolean,
  ) {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.available = available

  }


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

  protected getLocation(): string {
    return 'Unknown'; // replace with actual implementation
  }

  checkAvailable() {
     
  }

}

// let bookItems: any[] = [] 

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
  ) {
    super(title, author, genre, available);
  }

  getItem(): string[] {
    return [this.title, this.author, this.genre];
  }

  checkAvailable(): void {
    if (this.available === true) {
      console.log(`This is available.`)
    } else {
    console.log(`Sorry, it is not available right now. `)
    }
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
  ) {
    super(title, director, genre, available);
  }

  protected getLocation(): string {
    return this.location;
  }
}

let firstBook: Book = new Book('The Story of Magno', 'Prince Nesher Magno', 'Tragedy', 'Magno Publishing', '619-86-01094-10-8', 450, 'Philippines', true)

console.log(firstBook)
firstBook.checkAvailable()
console.log(firstBook.getItem())
