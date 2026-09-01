let arr = [3, 5, 7, 2, 8, 1, 4];

function something(arr) {
    if(arr.length === 0) {
        return null;
    }
let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(something(arr));