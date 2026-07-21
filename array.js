 // array

 const myArr= [1, 2, 3, 4, 5];
 const myheroes = ["Ironman", "Spiderman", "Thor"];

 const myArr2 = new Array(1, 2, 3, 4, 5);
 console.log(myArr[1]);

  // Array Methods

  
  myArr.push(6);
  
  myArr.pop(5);
  myArr.unshift(9);
  myArr.shift(9);

  console.log(myArr.includes(3));
  console.log(myArr.indexOf(9));

  const newArr = myArr.join();
  
  console.log(myArr);
  console.log(newArr);

    /// slice and splice

    console.log("A " , myArr); 
    const myn1 = myArr.slice(1, 4);
    console.log(myn1);

    console.log("B " , myArr);
    const myn2 = myArr.splice(1, 4);
    console.log("c " , myArr);
    console.log(myn2);