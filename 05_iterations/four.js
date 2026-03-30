const myObject = {                                     for object we use for in loop
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);        {key} =>  its give key value ,
}                                                                    {myObject[key]} it give key,s value                                                                     

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);                    its give index becausa aaray key is index 
    //console.log(programming[key]);       its give value on index 
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);               nothing print     map is not iteratable we cant write it as 
// }
