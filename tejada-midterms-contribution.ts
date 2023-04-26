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