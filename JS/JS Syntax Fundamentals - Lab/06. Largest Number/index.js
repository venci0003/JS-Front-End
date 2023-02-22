function largestNumber(firstNumber,secondNumber,thirdNumber){
    let result;
    if(firstNumber > secondNumber && firstNumber > thirdNumber){
       result = firstNumber;
    }
    else if(secondNumber > firstNumber && secondNumber > thirdNumber){
        result = secondNumber;
    }
    else{
        result = thirdNumber
    }

    console.log(`The largest number is ${result}.`)
}