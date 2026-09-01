
 let arr = [10, 20, 30, 40, 50, 60];

let largest = arr[0];
let secondlargest = arr[0];
for (let index = 0; index < arr.length; index++) {
    
   if (arr[index] > largest) {
       largest = arr[index]
     
    }
   }
for (let index = 0; index < arr.length; index++) {
     if (arr[index] === largest) {
      continue
    }
      if (arr[index]  >  secondlargest) {
    secondlargest = arr[index]
}

   }

   console.log(secondlargest)