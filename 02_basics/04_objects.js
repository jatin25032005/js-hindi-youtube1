// const tinderUser = new Object()       singlton object 
const tinderUser = {}        non singlton oneject
// console.log(tinderUser);   empty object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   print all which assign using dot 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   ///  obj in obj
// const obj3 = Object.assign( obj1, obj2, obj4)    its combine all objects value 
// const obj3 = Object.assign({}, obj1, obj2, obj4    same as above but its main representation

const obj3 = {...obj1, ...obj2}    combine as both objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"             in array seperated objects
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email     aacces first value first this is array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          give all keys in array
// console.log(Object.values(tinderUser));        give all value in array
// console.log(Object.entries(tinderUser));        hr ek key aur uski value ko different array me sabko ek array me

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       ask its lies in tinderuser or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course     value ko print krne ke liyr destructure

// console.log(courseInstructor);       .// give hitesh
console.log(instructor);              //give hitesh
   api       // apna kaam kisi dusre ke sir pr daal dena
       kabhi kabhi api object form me kabhi kabhi array ke form me mil skta hai
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

