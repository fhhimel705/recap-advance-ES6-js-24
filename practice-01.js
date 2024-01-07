// ---------- using map ------------------
const oddNumbers = [1, 3, 5, 7, 9];
const even = oddNumbers.map(n => n+1);
console.log(even);

// -------------- using for loop -------------------
let even02 = [];
for(let number of oddNumbers){
number = number + 1;
even02.push(number);
}
console.log(even02);
