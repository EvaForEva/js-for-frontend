//itar - dava ni gotov for cikul

//Multiply a Number by 2
function multiplyNumberBy2(input) {
    let number = Number(input);
    console.log(number * 2);
}
multiplyNumberBy2([2])

//Multiply 2 Numbers
function multiply2Numbers(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    console.log(numberOne * numberTwo);
}
multiply2Numbers([2, 4])


//Multiply of Devide 2 Numbers
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

//Product of 3 Numbers
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

//Print numbers from 1 to N
function from1ToN(input) {
    for(let i = 1; i <= input; i++) {
        console.log(i);
    }
}
from1ToN(5)

//Loop Numbers from N to 1
function loopNumbers(input) {
    let item = input[0];
    for(item; item > 0; item--) {
        console.log(item);
    }
}
loopNumbers([5])

//Print Numbers in Reversed Order
function numbersInReversedOrder(arr) {
    let reversedArr = arr.reverse();
    for(number of reversedArr) {
        console.log(number);
    }
}
numbersInReversedOrder([10, 15, 20])

function numbersInReversedOrder(input) {
    for(let i = arr.length - 1; i >= 0; i--) //arr.lenght hvasta duljinata na array-a a - 1 selektira poslednia index v array-a
    console.log(arr[i]);
}
numbersInReversedOrder([10, 15, 20])

//Set values to indexes in Arrays
function valuesToArrs(arr) {
    let arrLength = Number(arr[0]);
    let array = new Array(arrLength).fill(0); //taka se suzdava new array a v poslednata skoba stoi duljinata na indexite v nego. v sluchaia 3 broia intexi
    for(let i = 1; i < arr.length; i++) {
        let tokens = arr[i].split(" "); //ste premahne praznite mesta mejdu cifrite i tiretata
        let index = tokens[0];
        let value = tokens[2];
        array[index] = value;
    }
    for(number of array) {
        console.log(number);
    }
}
valuesToArrs(["3", "0-5", "1-6", "2-7"])






