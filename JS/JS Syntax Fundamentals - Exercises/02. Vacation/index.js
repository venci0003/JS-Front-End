function solve(countPeople, typeOfGroup, day) {
    let price = 0;
    if (typeOfGroup === "Students") {
      if (day === "Friday") {
        price = 8.45 * countPeople;
      } else if (day === "Saturday") {
        price = 9.8 * countPeople;
      } else {
        price = 10.46 * countPeople;
      }
      if (countPeople >= 30) {
        price = price - price * 0.15;
      }
    } 
    
    else if (typeOfGroup === "Business") {
      if (countPeople >= 100) {
        countPeople -= 10;
      }
      if (day === "Friday") {
        price = 10.9 * countPeople;
      } else if (day === "Saturday") {
        price = 15.6 * countPeople;
      } else {
        price = 16 * countPeople;
      }
    } 
    
    
    else if (typeOfGroup === "Regular") {
      if (day === "Friday") {
        price = 15 * countPeople;
      } else if (day === "Saturday") {
        price = 20 * countPeople;
      } else {
        price = 22.5 * countPeople;
      }
      if (countPeople >= 10 && countPeople <= 20) {
        price = price - price * 0.5;
      }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
  }