const numbers = [55, 21, 12, 36, 47];
const half = numbers.map(x => x/2);
// console.log(half);

const names = ['kala', 'dhola', 'janvi kapoor', 'jerin khan'];
const firstLetters = names.map(name => name[0]);
// console.log(firstLetters);

const nameLengths = names.map(name => name.length);
// console.log(nameLengths);

const products = [
    {name: 'pen', price: 5},
    {name: 'paper', price: 5},
    {name: 'pencil', price: 5},
    {name: 'book', price: 5},
]
const productName = products.map(product => product.name);
// console.log(productName);

const productName02 = products.map(x => x.name);
// console.log(productName02);

