const numbers = [50, 21, 12, 36, 47];
const largeNumbers =  numbers.filter(number => number > 25);
// console.log(largeNumbers);

const even = numbers.filter(number => number % 2 === 0);
// console.log(even);

const products = [
  { name: "tv", price: 5000 },
  { name: "pc", price: 25000 },
  { name: "mobile", price: 15000 },
  { name: "laptop", price: 50000 },
  { name: "book", price: 500 },
  { name: "ipad", price: 55000 },
];

const productPrice = products.filter(product => product.price > 10000);
console.log(productPrice);