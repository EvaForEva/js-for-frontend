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