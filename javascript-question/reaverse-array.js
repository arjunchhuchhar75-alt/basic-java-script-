function something(arr) {
    let reversed = []
    for (let index = arr.length - 1; index >= 0; index--) {
        reversed.push(arr[index])
    }
    return reversed
}

console.log(something([10, 20, 30, 40, 50, 60]))