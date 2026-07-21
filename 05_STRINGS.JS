const name = "Arjun"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Arj-un*55")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("j"));

const newString = gameName.substring(-8, 4)

console.log(newString);

const anotherString = 
gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Arjun  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=8pDqJVdNa44&list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9&index=7"


console.log(url.replace("https://www.youtube.com/watch?v=8pDqJVdNa44&list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9&index=7", "https://www.google.com"));

    console.log(url.includes("SUNDER"));
    






