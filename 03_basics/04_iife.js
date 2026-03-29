// Immediately Invoked Function Expressions (IIFE)
global scope ke pollution se bachne ke liye iifi ka use krte hai 
    

(function chai(){
    // named IIFE                     
    console.log(`DB CONNECTED`);
})();



do iifi ko execute krne ke liye first ke baad semicolon lga do;


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);               unnamed iifi 
                                                            also give parameter as hitesh
} )('hitesh')

