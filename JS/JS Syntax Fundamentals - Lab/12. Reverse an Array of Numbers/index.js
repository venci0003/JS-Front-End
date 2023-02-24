function arrayReverse(loops,input){

    let array = [];

    for(let i = 0; i < loops; i++){
        array.push(input[i])
    }

    let output = [];

    for(let i = array.length - 1; i >= 0; i--){
        output.push(array[i])
    }

    console.log(output.join(' '))
}
