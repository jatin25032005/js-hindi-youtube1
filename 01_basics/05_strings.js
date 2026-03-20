const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");    hitesh20 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   
its best method to print backtickkr andr doller sign and curly braces me variable name 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);      give string 0 index value 
// console.log(gameName.__proto__);  acces object 


// console.log(gameName.length);     give string length 
// console.log(gameName.toUpperCase());   print string value in uppercase but not cahnge in oroginal string due to primitive data tyoe value store in stack and return a copy not a refrence 
console.log(gameName.charAt(2));    print character at 2nd place 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)    at last index value does not include      if give negative value than its ignore and print 0 to last index which you give
console.log(newString);

const anotherString = gameName.slice(-8, 4)    if start is greater than end return empty string   in this use neagtive value 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());   remove extra spaces from end and start    also new method exits 
trim.start()
trim.end()
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))    its use to replace the place in string by another value   str.replace('value being replaced','value will be replace");

console.log(url.includes('sundar'))    specific part exits in string 

console.log(gameName.split('-'));      use to split and convert in to array bases on and thing     .split('spillter' ,'limit')
