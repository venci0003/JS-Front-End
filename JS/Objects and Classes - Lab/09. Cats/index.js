function cat(array) {
    class Cat {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
    let cats = [];
    for (const token of array) {
      let [name, age] = token.split(" ");
      let cat = new Cat(name, age);
      cats.push(cat);
    }
    cats.forEach((c) => c.meow());
  }
