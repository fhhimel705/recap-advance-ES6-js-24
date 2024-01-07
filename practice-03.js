// --------------- using loop -----------------
const numbers = [1, 9, 17, 22];
let sum = 0;
for(const number of numbers){
    sum = sum + number;
}
console.log(sum);

// ------------------- using reduce --------------------
const sum02 = numbers.reduce((previous , current) => previous + current ,0)
console.log(sum02);

