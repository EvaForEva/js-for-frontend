function multiplyOrDevide(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    if(numberOne <= numberTwo) {
       console.log(numberOne * numberTwo);
    }else{
        console.log(numberOne / numberTwo);
    }
}
multiplyOrDevide([2, 4])