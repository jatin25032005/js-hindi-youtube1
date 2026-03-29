const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  this use acces to cureent context;
        console.log(this);         give current context ;
    }

}

// user.welcomeMessage()         hitesh welcome to wbsite;
// user.username = "sam"
// user.welcomeMessage()         sam welcome to wbsite;

// console.log(this);         we in node inviornment so its refer to empty object ;
                              now engine is standalone hai brouser ke andr global object window object hai
                               
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);          give undefined we cant use this inside function 
// }

// chai()


// function chai(){
//
//   console.log(this);          so give various mircrotask ,fetch,time origin etc
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);    give undefined;
// }

// const chai =  ()=> {
//     let username = "hitesh"
//     console.log(this.username);      give undefined;
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);                   give empty parethesis ;
}


// chai()

// const addTwo = (num1, num2) => {                 if you wraaped in curly vrases you need to write return 
                                                       if in parethesis no need
//     return num1 + num2
// }
console.log(addTwo(3, 4))               7

// const addTwo = (num1, num2) =>  num1 + num2        implicit keyword return likhne ki jrurat nhi

// const addTwo = (num1, num2) => ( num1 + num2 )      if you wraaped in curly vrases you need to write return 
                                                       if in parethesis no need 
const addTwo = (num1, num2) => ({username: "hitesh"})         object ko return ke liyr parenthesis me wrapped krna pdenga


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
