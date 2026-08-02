 // for

 for(let index = 0; index < 10; index++) { 
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
}

for (let index = 0; index < 10; index++) {
    console.log(`Outler loop value: ${index}`);
for(let j = 0; j < 10; j++) {
    // console.log(`Inner loop value: ${j} and inneer loop value: ${index}`);
    console.log(index + '*' + j + '=' + index * j);
}

} 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

 // break and continue

for (let index = 1; index < 20; index++) {
    if (index === 17) {
        console.log("5 is best number");
        // break;
        continue;
    }
    console.log(index);
}
