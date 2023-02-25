function ageNames (ageInput){

    if(0 <= ageInput && ageInput <= 2){
        console.log('baby');
    }
    else if(3 <= ageInput && ageInput <= 13){
        console.log('child')
    }
    else if(14 <= ageInput && ageInput <= 19){
        console.log('teenager')
    }
    else if(20 <= ageInput && ageInput <= 65){
        console.log('adult')
    }
    else if(ageInput >= 66){
        console.log('elder')
    }
    else {
        console.log('out of bounds')
    }
}