//  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //  const newNumbers = myNumbers.map( (num) => num + 10 );
// //  console.log(newNumbers);

// const newNums = myNumbers
//                          .map((num) => num + 10)
//                          .map((num) => num * 2)
// console.log(newNums);


const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce(function(accumulator, current) {
    console.log(`accumulator: ${accumulator} and current: ${current}`);
    
    return accumulator + current;
}, 0);
console.log(myTotal);

// my shopping cart
const shoppingCart = [
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
    { id: 3, name: "Product 3", price: 15, quantity: 3 }
];

const totalCartValue = shoppingCart.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
}, 0);

console.log(totalCartValue);