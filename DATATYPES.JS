//  PRIMITIVE DATATYPES

//  7 TYPES : STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, BIGINT, SYMBOL

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
const userEmail = undefined

const ID = Symbol('123')
const anotherID = Symbol('123')

console.log(ID === anotherID);

//   const bigNumber = 1234567890123456789012345678901234567890n



//  REFERENCE  (NON-PRIMITIVE) DATATYPES

//  3 TYPES : OBJECT, ARRAY, FUNCTION
 

const heroes = ["Ironman", "Spiderman", "Thor"]
let myObj ={ 
     name: "Tony Stark",
    age: 45,
   }

   const myFunction = function(){
console.log("Hello World");
}

console.log(typeof outsideTemp);







// Stack (Primitive) and Heap (Reference) Memory

let myName = "Arjun"

let anothername = myName
anothername = "Kumar"
console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@example.com"
}

let userTwo = userOne
userTwo.email = "newuser@example.com"

console.log(userOne.email)
console.log(userTwo.email)
