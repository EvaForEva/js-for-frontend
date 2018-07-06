//itar - dava ni gotov for cikul

//Calculate
function sum() {
    let sum = (30 + 25) + ((35 - 14) * 2);
    console.log(sum);
}
sum()

//Odd Even number
function number(input) {
    let number = input;
    if(number%2 == 0) {
        console.log("Even number");
    }else {
        console.log("Odd number");
    }
}
number(input)

//Bigger number
function biggerNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    if(firstNumber > secondNumber) {
        console.log(firstNumber);
    }else {
        console.log(secondNumber);
    }  
}
biggerNumber([10, 20])

//Switch case
function days() {
    let day = 3;
    switch(day) {
        case 1: console.log("Monday");break;
        case 2: console.log("Tuesday");break;
        case 3: console.log("Wednesday");break;
        case 7: console.log("Sunday");break;
        default: console.log("Error!");break;
    }
}
function days()

//First 20 numbers
function numbers() {
    for(let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
numbers()

//Array Elemens
function solve(input) {
    let elemens = input;
    for(let element of elemens)
    console.log(element);
}
solve([1, 2, 3, 4, 5, "aaa", "ooo", "uuu"])

























