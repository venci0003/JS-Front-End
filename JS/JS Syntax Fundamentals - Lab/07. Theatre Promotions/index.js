function theatrePromotions(dayValue, ageValue){
    let finalSum;

    if(dayValue === 'Weekday'){
        if(0 <= ageValue && ageValue <= 18){
            finalSum = '12$';
        }
        else if(18 < ageValue && ageValue <= 64){
            finalSum = '18$';
        }
        else if(64 < ageValue && ageValue <= 122){
            finalSum = '12$';
        }
        else{
            finalSum = 'Error!'
        }
    }
    else if(dayValue === 'Weekend'){
        if(0 <= ageValue && ageValue <= 18){
            finalSum = '15$';
        }
        else if(18 < ageValue && ageValue <= 64){
            finalSum = '20$';
        }
        else if(64 < ageValue && ageValue <= 122){
            finalSum = '15$';
        }
        else{
            finalSum = 'Error!'
        }
    }
    else if(dayValue === 'Holiday'){
        if(0 <= ageValue && ageValue <= 18){
            finalSum = '5$';
        }
        else if(18 < ageValue && ageValue <= 64){
            finalSum = '12$';
        }
        else if(64 < ageValue && ageValue <= 122){
            finalSum = '10$';
        }
        else{
            finalSum = 'Error!'
        }
    }

    console.log(finalSum)
}