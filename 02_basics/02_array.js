const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)    push works as push array as element;

// console.log(marvel_heros);     array print
// console.log(marvel_heros[3][1]);         other arraywhich is being push treated as a elemet so we access use this sysntax

// const allHeros = marvel_heros.concat(dc_heros)     concat work same as push; but if we assign in other variable return as a array 
// console.log(allHeros);                           retrun as a new array

const all_new_heros = [...marvel_heros, ...dc_heros]     ... works as spread all two array element spreads in new array return same sa concate 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]        array of arrays 

const real_another_array = another_array.flat(Infinity)           flat give a new array all elements are scattered  .flat(depth) where depth is represent is no of array of arrays 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))        ask type is aaray are not
console.log(Array.from("Hitesh"))          its convert string in to array 
console.log(Array.from({name: "hitesh"})) // interesting  its give impty array otherwise you define keys 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));       convert variable value in to array 
