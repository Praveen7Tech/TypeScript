
// Unknow Type

// let value : unknown;

// value = 50;
// value = "praveen"
// value = {a : 10}

// //console.log(value.length)   // error

// if(typeof value === "string"){
//     console.log(value.length)
// }

// Type Narrowing

// function narrowing(value : string | number){
//     if(typeof value === "string"){
//         console.log("value :",value)
//     }
//     else{
//         console.log("value :", value)
//     }
// }

// narrowing("praveen")


// intersection Type

interface person {
    name : string
}

interface employee {
    empId : number
}

type worker = person & employee
const Worker : worker = {
    name : "praveen",
    empId : 12
}

export {}