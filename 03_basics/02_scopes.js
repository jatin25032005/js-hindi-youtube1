//var c = 300            var  scope is global and also out of curly brases;
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);          print 10;
    
}



// console.log(a);     //  300
// console.log(b);     // undefined
// console.log(c);     //undefined

    global scope is different in chrom eand compliler

function one(){                  this function can,t access inner function value 
    const username = "hitesh"

    function two(){                       inner function easily access outside value
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()             // one is called otherwise nothing done;

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {                     
        const website = " youtube"
        // console.log(username + website);               hitesh youtube ;
    }
    // console.log(website);                             website not defind due to out of scope ;
}

// console.log(username);                                 not defind


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){                its valid we declare value above functiom if we can,t assign function to variable
    return num + 1
}



addTwo(5)
const addTwo = function(num){       its not valid
    return num + 2
}
