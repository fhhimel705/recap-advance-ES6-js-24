// 1. var , let , const
// dont use var
const numbers = [11, 22, 33, 44, 55];
let salary = 4580;
salary = 5000;

// 2. default parameters
function calculateSalary(salary, tax, bonus) {
  const remaining = salary - salary * tax;
  const total = remaining + bonus;
  return total;
}

// 3. template string
const html = `
<div>
<h3>hello</h3>
<h2> World! </h2>
<p> Salary : ${calculateSalary(10200, .30, 0)}
</div>`;

// 4. arrow function
const sqr = x => x * 2;
const calculateSalary02 = (salary, tax, bonus) => salary - (salary * tax) + bonus;

// 5. spread
const ages = [11, 22, 33, 44, 55];
const ages02 = [1, ...ages, 77];

// 6. destructuring
const phone = {model: 'samsung', weight: 150, color: 'white'};
const {model} = phone;
// console.log(model);
const number = {x: 0, y: 1, z: 2, number01: 3, number02: 4 };
const {x, y, z, ...c} = number;
// console.log({...c});


