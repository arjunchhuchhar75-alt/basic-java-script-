  // singleton
  Object.create

   // object literals

const mySym = Symbol("key1")

   const JsUser = {

     name: "Arjun",
     "full name": "Arjun Ahir",
     [mySym]:"mykey1",
             age: 18,

     location: "Dwarka",
          email: "Arjun@gmail.com",
    isLoggedIn: false,
                      lastLogindays: ["monday", "saturday"]
   };
     console.log(JsUser.email)
     console.log("full name")
     console.log(JsUser["email"])
     console.log(JsUser[mySym])

     JsUser.email = "Arjun@chatgpt.com"
    //  Object.freeze(JsUser)
     JsUser.email = "Arjun@microsoft.com"
    console.log(JsUser);

    JsUser.greeting = function(){
    console.log("Hello JS user");
    }
    JsUser.greetingTwo = function(){
        console.log('Hello JS user, ${this.name}');
    }

    
    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());