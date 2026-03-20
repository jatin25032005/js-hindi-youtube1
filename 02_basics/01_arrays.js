// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)      add element at 0th index and shifs at one place
// myArr.shift()         remove first element and left shift at one place

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));     give element index

// const newArr = myArr.join()     convert arrayy element to string and bind each of all


// console.log(myArr);        print array
// console.log( newArr);     convert arrayy element to string and bind each of all


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)     its does not include range means 1,2 and no change in original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    its include range 1,2,3 and remove thats elements fromoriginal array
console.log("C ", myArr);
console.log(myn2);
