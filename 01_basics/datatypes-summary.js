//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100       javascript is dynamically typed so datatype is auto declare during runtime ;
const scoreValue = 100.3   for this number is data type no concept of float and decimal

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')            either we give same value in symbol but symbol give diffrent and unique 
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n // using n we convert in bigint
onsole.log(typeof anotherId); give undefined 


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
