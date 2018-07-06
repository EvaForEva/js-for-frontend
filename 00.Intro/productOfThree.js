function productOfThree(arr) {
    let negativeNumbers = 0;
    for(number of arr) {
        if(number < 0) {
            negativeNumbers++;
        }else if(number === 0) {
            return "Positive";
        }
    }   
    if(negativeNumbers%2 !== 0) {
        return "Negative";
    }else {
        return "Positive";
    }
    console.log(threeNumbers([2, 3, -1]))
}
productOfThree([2, 3, -1])