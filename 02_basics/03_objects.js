// singleton     jb constructor se declare kre tb singlton bnta hai 
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",          object literals in object we define key and value
      mySym: "mykey1"       its works as string          
    [mySym]: "mykey1",      its works as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])        also can access this types if email contain string than key ko string ki tarah hi do
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"             value overwrite
// Object.freeze(JsUser)   use all value freeze no changement perform now
JsUser.email = "hitesh@microsoft.com"      value can,t change in object due to freeze            
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());      // Hello JS user
console.log(JsUser.greetingTwo());    //Hello JS user ,hitesh
