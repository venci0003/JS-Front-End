function storeProvision(firstArray, secondArray) {
  let combined = [...firstArray, ...secondArray];

  let object = {};

  for (let index = 0; index < combined.length; index += 2) {
    let product = combined[index];
    let countOfProduct = Number(combined[index + 1]);

    if (!object.hasOwnProperty(product)) {
        object[product] = countOfProduct;
    }
    else{
        object[product] += countOfProduct;
    }
  }

  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
