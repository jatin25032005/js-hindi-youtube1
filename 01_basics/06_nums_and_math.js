const score = 400       compiler can understand its number
// console.log(score);   during print gives 400

const balance = new Number(100)    here we can declare its compulsory number
// console.log(balance);  its insure and tell us number{100}
console.log(balance.toString()); convert number to string 
// console.log(balance.toString().length); check lenth after number to string conversion
// console.log(balance.toFixed(1));  its use to take zero after decimal point some time use for remove precision value;

const otherNumber = 123.8966    precision and focus on how much part of value

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   assigning commas based on indian standard;

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);   its an object of in own =self
// console.log(Math.abs(-4));   give absoulute value
// console.log(Math.round(4.6));  give roundoff value
// console.log(Math.ceil(4.2));  
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   always give the random value btw 0 and 1;
console.log((Math.random()*10) + 1);  gretor than 1 value but some time its can give 0.something
console.log(Math.floor(Math.random()*10) + 1);  using floor to floow value and random work same 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   usimng this formula for taking different value every time bt min and max
