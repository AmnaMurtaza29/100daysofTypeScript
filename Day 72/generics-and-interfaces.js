"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let bookCollection = new Collection();
bookCollection.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
let gameCollection = new Collection();
gameCollection.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
