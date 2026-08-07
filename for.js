//  // for of

//  const arr = [1, 2, 3, 4, 5];
//  for (const value of arr) {
// //     //  console.log(value);
//  }

//  const greeting = 'Hello, World!';
// //  for (const char of greeting) {
//     //   console.log(char);
 



//  // map

//  const map = new Map();
//  map.set('In', "India");
//  map.set('Us', "United States");
//  map.set('Uk', "United Kingdom");

//  console.log( map);


//  for (const [key, value] of map) {
//         console.log(`${key} : ${value}`)
//  }

//  const myObject = {
//     'game1': 'cricket',
//     'game2': 'football',
//  }

//  for(const [key, value] of Object.entries(myObject)) {
//     // console.log(`${key} : ${value}`);
//  }

 const myObject = {
    js: 'javascript',
    py: 'python',
    rb: "ruby",
 }

 for (const key in myObject) {
    console.log(key);
 }


 const programming = ['javascript', 'python', 'ruby', 'java'];
 for (const index in programming) {
    console.log(index);
 }


 