function circleArea(inputValue){
    let inputType = typeof(inputValue);
    
    let result;

    if(inputType === 'number'){

       result = Math.pow(inputValue, 2) * Math.PI; 

       console.log(result.toFixed(2))
    }
    else{
        
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
    
}