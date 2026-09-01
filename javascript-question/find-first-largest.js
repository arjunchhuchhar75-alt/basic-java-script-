let arr = [3, 5, 7, 2, 8, 1, 4];
let largest = arr[0];

function something(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(something(arr));