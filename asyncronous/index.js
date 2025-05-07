"use strict";
// Promise
Object.defineProperty(exports, "__esModule", { value: true });
// const fetchData = () : Promise <string> => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const success = false
//             if(success){
//                 resolve ("Data fetched sucessfully")
//             }else{
//                 reject ("Error fetching data")
//             }
//         }, 1000)
//     })
// }
// fetchData()
// .then(result => console.log(result))
// .catch(error => console.log(error))
// Promise that resolves to a string
var fetchData = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully");
        }, 100);
    });
};
fetchData()
    .then(function (result) { return console.log(result); });
