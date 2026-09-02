
//  let arr = [10, 20, 30, 40, 50, 60];

// let largest = arr[0];
// let secondlargest = arr[0];
// for (let index = 0; index < arr.length; index++) {
    
//    if (arr[index] > largest) {
//        largest = arr[index]
     
//     }
//    }
// for (let index = 0; index < arr.length; index++) {
//      if (arr[index] === largest) {
//       continue
//     }
//       if (arr[index]  >  secondlargest) {
//     secondlargest = arr[index]
// }

//    }

//    console.log(secondlargest)

function secondlargest(nums) {
if(nums.length < 2)return null;
    let f = nums[0]  
let s = nums[1]


for (let i = 0; i < nums.length; i++) {
   
    if (nums[i] > f) {
         f = nums[i]
    } else if (nums[i] > s ) {
         s = nums[i]
    } 
}
     
  return s  
}
console.log(secondlargest([4 ,5, 6, 7]))






