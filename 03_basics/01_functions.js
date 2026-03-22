
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()    we can print function using function name and(_)

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);   
// }

addTwoNumbers()   // its give not a number NAN; because we did not pass any argument;
addTwoNumbers(2,3)  //give 5

const result = addTwoNumbers(3, 5)   its give undefined value ; because value is not stored directly;

// console.log("Result: ", result);

function addTwoNumbers(number1, number2)
{

    // let result = number1 + number2          now result can store value;
    // return result                        if we use return in inside than we store function value in variable outside
    return number1 + number2
    console.log("hitesh");        after first return nothing print or run; if we return value inside fuction and want to print value then we need to print fuction . 
}

const result = addTwoNumbers(3, 5)               // result=8

// console.log("Result: ", result  );                //8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`                   its not run due to before happen first return ;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))     here val 1=200 ,val2 = 400 , and [500,2000] = num1 due to spread operator;

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);         if we use anyobject not maintion name of object then we take care of security 
}                                                                                              check if not any object and or not object key lies give undefined;

// handleObject(user)
handleObject({
    username: "sam",               also we can pass object as argument 
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){                     getArray is same as getObject if any exist its take value from there 
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
