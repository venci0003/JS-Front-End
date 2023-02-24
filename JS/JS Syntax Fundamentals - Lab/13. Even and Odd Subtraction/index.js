function evenAndOddSubtraction (input){
    
    let evenSum = 0;

    let oddSum = 0;

    let result = 0;

    for(let i = 0 ; i < input.length; i++){

        if(input[i] % 2 == 0){
            evenSum += input[i];
        }
        else{
            oddSum += input[i];
        }
    }

    result = evenSum - oddSum;

    console.log(result)
}
