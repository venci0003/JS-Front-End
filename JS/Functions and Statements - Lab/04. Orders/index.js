function order(product, quantity) {
  let dictionary = {
    water: 1.0,
    coffee: 1.5,
    snacks: 2.0,
    coke: 1.4,
  };
  let price = dictionary[product] * quantity;
  console.log(price.toFixed(2));
}
