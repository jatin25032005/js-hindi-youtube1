// Dates

let myDate = new Date()
// console.log(myDate.toString());   give date and time  
// console.log(myDate.toDateString());   give day and date
// console.log(myDate.toLocaleString());   give day date time
// console.log(typeof myDate);   object

// let myCreatedDate = new Date(2023, 0, 23)   date formet
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   date and time formet in which month satrt from 0
// let myCreatedDate = new Date("2023-01-14")         in this formets month start from 01;
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());    give date and time ;

let myTimeStamp = Date.now() 

// console.log(myTimeStamp);      time in miliseconds number formet we use to comapre other date and time stamps
// console.log(myCreatedDate.getTime());  
// console.log(Math.floor(Date.now()/1000));   convert in decimals     and comaprision makes easy using divide and takinf floor for avoid decimal value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() );   give month
console.log(newDate.getDay());     give day

// `${newDate.getDay()} and the time `  inject it console log ;

newDate.toLocaleString('default', {             can also declare it
    weekday: "long",
    
})

