const score = 400
console.log(score);// 400

const balance = new Number(100)
console.log(balance);// [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=1123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));

  // ******************Maths************************

  console.log(Math);
  console.log(Math.abs(-5));
  console.log(Math.round(4.9));

  console.log(Math.floor(4.9));
  console.log(Math.ceil(4.4));

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));    

console.log(Math.random()*10 + 1);

const min = 10
const max = 25



console.log(Math.floor(Math.random() * (max - min + 1)));


console.log(Math.floor(Math.random() * (max - min + 1)) + min);
