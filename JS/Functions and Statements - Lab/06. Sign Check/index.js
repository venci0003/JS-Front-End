function signCheck(...array) {
    let arrowFunction = (x) => x < 0;
    let result = array.filter(arrowFunction)
    .length%2===0?'Positive':'Negative';
  
    console.log(result)
  }