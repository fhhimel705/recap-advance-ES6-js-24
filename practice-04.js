//------------------ use for loop in object ---------------------
const products = [
  { name: "tv", price: 40 },
  { name: "pc", price: 25 },
  { name: "mobile", price: 15 },
  { name: "laptop", price: 5 },
  { name: "book", price: 50 },
  { name: "ipad", price: 55 },
];
let sum = 0;
for (const product of products) {
  sum = sum + product.price;
}
console.log(sum);

//------------------ use reduce in object ---------------------
const sum02 = products.reduce((previous , current) =>{
    console.log(previous , current.price);

  return previous + current.price;   
} , 0);
console.log(sum02);