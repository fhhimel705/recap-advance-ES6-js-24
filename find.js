const products = [
  { name: "tv", price: 5000 },
  { name: "pc", price: 25000 },
  { name: "mobile", price: 15000 },
  { name: "laptop", price: 50000 },
  { name: "book", price: 500 },
  { name: "ipad", price: 55000 },
];

const budgetProducts = products.find(product => product.price > 30000);
console.log(budgetProducts);


