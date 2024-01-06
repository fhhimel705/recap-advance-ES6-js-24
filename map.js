const numbers = [11, 22, 33, 44, 55];
const output = [];

function getDouble(numbers){
    for (const number of numbers) {
      const double = number * 2;
      output.push(double);
    }
    return output;
}
// console.log(getDouble(numbers));

function doubleIt(number){
    return number * 2;
}
// console.log(doubleIt(5));

const double02 = number => number * 2;
// console.log(double02(10));

const numbers02 = [11, 22, 33, 44, 55];
const makeDouble = numbers02.map(number => number * 2);
// console.log(makeDouble);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
// console.log(fiveTimes);