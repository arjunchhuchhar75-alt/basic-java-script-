let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = arr[0];
let secondmin = arr[1]; 


for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        
    }
   } 

for (let i= 0; i < arr.length; i++) {
    if (arr[i] === min) {
     continue
    }
    if (arr[i] < secondmin) {
        secondmin = arr[i];
    }

    

}


console.log(secondmin);










