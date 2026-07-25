
function sayMyName(){
console.log("A");
console.log("r");
console.log("j");
console.log("u");
console.log("n");
}

// sayMyName() 

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
        
    let result = number1 + number2
    if(result > 10){
      return result;
    }
    
     return 90;
    }
function subStractTwoNumber(n1,n2){
    let r = n1 - n2;
    if(  r<0   ){
      r =  r - 1;
    } else{

      return r;
    }
    
    
}

const result = subStractTwoNumber(5, 10)
const result2 = subStractTwoNumber(10, 5)


console.log("Result: ", result, "and result 2 is ", result2);



  function loginUserMessage(username = "sam"){
      if(!username){
         console.log("please enter a username");
          return
        }
        return '${username} just logged in'
}



// console.log(loginUserMessage("Arjun"))
// console.log(loginUserMessage("Arjun"))

function calculatecartprice(val1, val2, ...num1){
     return num1
}

// console.log(calculatecartprice(200, 400, 500, 2000))
 
const user = {
      username: "Arjun",
       price: 199
      };

function handleobject(anyobject){
   console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}

handleobject(user)
handleobject({
       username: "sam",
       price: 399
})
   
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}


console.log(returnSecondValue(myNewArray));