function fruitCalculator(fruitName, weightInGrams, pricePerKilogram){
    let moneyNeeded = weightInGrams * pricePerKilogram;
    moneyNeeded/=1000;
    weightInGrams/=1000;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInGrams.toFixed(2)} kilograms ${fruitName}.`);
}
