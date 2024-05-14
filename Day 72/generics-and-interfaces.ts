interface Book {
    itemType: string;
    title: string;
    isbn: number;
  }
  
  interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  
  class Collection<T> {
    public data: T[] = [];
  
    add(item: T): void {
      this.data.push(item);
    }
  }
  
  let bookCollection = new Collection<Book>();
  bookCollection.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
  
  let gameCollection = new Collection<Game>();
  gameCollection.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
  