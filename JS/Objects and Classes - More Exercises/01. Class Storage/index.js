class Storage {
  constructor(capacity) {
    (this.capacity = capacity), (this.storage = []), (this.totalCost = 0);
  }
  addProduct(product) {
    if (this.capacity - product.quantity >= 0) {
      this.storage.push(product);
      this.capacity -= product.quantity;
      this.totalCost += product.price * product.quantity;
    }
  }

  getProducts() {
    return this.storage.map((product) => JSON.stringify(product));
  }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
