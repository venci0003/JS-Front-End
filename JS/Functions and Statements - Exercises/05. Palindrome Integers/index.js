function isPalindrome(arrayInput){

    for(let number of arrayInput){
        number = String(number);
        if(number[0] === number[number.length - 1]){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
}
