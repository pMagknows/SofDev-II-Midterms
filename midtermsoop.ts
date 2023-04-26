interface CatalogSystem {
  title: string;
  author: string;
  genre: string;
  available: boolean;
  location: string,
  language: string;
  publicationYear: number;
  targetAudience: string;
  reviews: string
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
    public language: string,
    public publicationYear: number,
    public targetAudience: string,
    public reviews: string,
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
    return this.price; // replace with actual implementation
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
    return 'Unknown';
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
    public language: string,
    public publicationYear: number,
    public targetAudience: string,
    public reviews: string,
    public price: number
  ) {
    super(title, author, genre, available, location, language, publicationYear, targetAudience, reviews, price);
  }

  private setPrice(price: number) {
    this.price = price
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

  checkPrice(name: string): void {
    console.log(`The price is Php${this.price} ${name}`)
  }
  checkPrice(name: string, value:number): void {
    console.log(`The price is Php${this.price} + Tips of php${value} Thank you ${name} <3`)
  }

  checkSale() {
    if (this.author === '') {
      return
    }
    let seeAuthor = this.author.split(' ')
    if (seeAuthor[0] === 'Prince') {
      let discountPrice = (this.price - (this.price * 0.05));
      return this.setPrice(discountPrice)
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
    public language: string,
    public publicationYear: number,
    public targetAudience: string,
    public reviews: string,
    public price: number
  ) {
    super(title, director, genre, available, location, language, publicationYear, targetAudience, reviews, price);
  }

  private setPrice(price: number): void {
    this.price = price
    console.log('Price has been updated!')
  }

  getPrice(): number {
    return this.price;
  }

  isAvailable(): void {
    if(this.available === true){
      console.log('Yes it is available!')
    }else {
      console.log('No, this is not available!')
    } 
  }

  checkSale(): void {
    let directorsale = this.director.split(' ')
    if (directorsale[0] === 'Prince' || directorsale[0] === 'Clyde') {
      let discountPrice = this.price - this.price * 0.05;
      this.setPrice(discountPrice)
      console.log(`Updated price to ${this.price}`)
    }
  }

  getTargetAudience(): string {
    return this.targetAudience;
  }

  getLocation(): string {
    return this.location;
  }
}

let nameOfBook1: Book = new Book('The Da Vinci Code', 'Dan Brown', 'Mystery', 'Doubleday', '978-0385504201', 464, 'United States', false, 'English', 2003, 'Adult', 'Thrilling page-turner!', 1500);
let theAlchemist: Book = new Book('The Alchemist', 'Prince Nesher Magno', 'Fiction', 'HarperOne', '978-0062315007', 208, 'Brazil', true, 'English', 1988, 'Adult', 'Life-changing book!', 1300)
let nameOfBook9: Book = new Book('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 'Self-help', 'HarperOne', '978-0062457714', 224, 'United States', true, 'English', 2016, 'Adult', 'Unconventional self-improvement', 900);

theAlchemist.checkAvailable()
console.log(theAlchemist.getItem())
theAlchemist.checkSale()
console.log(theAlchemist.checkPrice('Ian'))
console.log(theAlchemist.checkPrice('Ian', 100))
theAlchemist.getTitle()

// Create a new DVD object
const myDVD: DVD = new DVD(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  152,
  "PG-13",
  "Los Angeles",
  true,
  "English",
  2008,
  "Teen and Up",
  "A gritty and intense superhero movie with an iconic performance by Heath Ledger as the Joker.",
  200
);

// Test the getPrice method
console.log(myDVD.getPrice()); // Output: 200

// Test the setPrice method
myDVD.setPrice(250);
console.log(myDVD.getPrice()); // Output: Price has been updated! & Output: 250

// Test the isAvailable method
myDVD.isAvailable(); // Output: Yes it is available!

// Test the checkSale method with no discount
myDVD.checkSale(); // Output: No Discount!

// Test the checkSale method with discount
const discountDVD: DVD = new DVD(
  "The Prince of Darkness",
  "Prince Johnson",
  "Horror",
  ["John Doe", "Jane Smith"],
  90,
  "R",
  "New York",
  true,
  "English",
  2019,
  "Adult",
  "A scary movie about a haunted house.",
  100
);

discountDVD.checkSale(); // Output: Updated price to 95

// Test the getTargetAudience method
console.log(myDVD.getTargetAudience()); // Output: Teen and Up

