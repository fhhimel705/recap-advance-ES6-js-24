// map , forEach , filter , find , reduce
// ----------------- it returns an arrays elements sum ----------------
const numbers = [1, 2, 3, 4, 5, 6];
// .reduce (accumulatorFunction, initial value)
// accumulation use two parameters
const total = numbers.reduce((previous, current) => {
    console.log(previous , current);
  return previous + current;
}, 0);

// console.log(total);
