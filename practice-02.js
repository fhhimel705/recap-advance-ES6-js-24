// -------------- using filter ----------------
const numbers = [11, 20, 33, 40, 55, 60];
const newNumbers = numbers.filter((n) => n % 10 === 0);
console.log(newNumbers);

// ---------------- using loop -----------------

let newNumbers02 = [];
for (const number of numbers) {
  if (number % 10 === 0) {
    newNumbers02.push(number);
  }
}
console.log(newNumbers02);



