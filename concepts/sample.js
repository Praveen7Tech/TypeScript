"use strict";
// Unknow Type
Object.defineProperty(exports, "__esModule", { value: true });
// let value : unknown;
// value = 50;
// value = "praveen"
// value = {a : 10}
// //console.log(value.length)   // error
// if(typeof value === "string"){
//     console.log(value.length)
// }
function narrowing(value) {
    if (typeof value === "string") {
        console.log("value :", value);
    }
    else {
        console.log("value :", value);
    }
}
narrowing(500);
