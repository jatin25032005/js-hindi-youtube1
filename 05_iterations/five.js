const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){                      using arrayname and dot we open various operation
//     console.log(val);                        print all array valur line buy line
// } )

// coding.forEach( (item) => {          in place of simple fuction we use arrow function
//     console.log(item);
// } )

// function printMe(item){                     same work 
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {        its give line by line item value and its index with full array
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);   its give all language name 
    console.log(item.languageName);  its give all language file name 
    
    
  
} )
