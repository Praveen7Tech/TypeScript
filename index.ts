// Infer Types (Implicit Types)

// let userName = "Praveen"
// let age = 20

// Defining Types

// let userName : string = "Praveen"
// let age: number = 25
// let graduated : boolean = true
// let skills : string[] = ["JS","TS","CSS"]
// let count : number[] = [1,2,3,4,5]
// let Details :{name:string; age:number, place:string} = {
//     name:"praveen",
//     age:25,
//     place:"kochi"
// }


// Interface

// interface Details {
//     name:string;
//     age:number;
//     place:string;
//     salary:number;
//     getName: () => void;
// }

// let userDetails :Details = {
//     name:"praveen",
//     age:25,
//     place:"kochi",
//     salary:50000,
//     getName() {
//         console.log(this.name)
//     },
// }

// Type

// type Details = {
//     name:string;
//     age:number;
//     place:string;
//     salary:number;
//     getName: () => void;
// }

// let userDetails :Details = {
//     name:"praveen",
//     age:25,
//     place:"kochi",
//     salary:50000,
//     getName() {
//         console.log(this.name)
//     },
// }

// Union/Optional
// in case of union type we can select multile data types in a attribute(either or nor)
// in case of optional if it is not mandatory to use (?)

// type Details = {
//     name:string;
//     age:number | string;
//     place:string;
//     salary:number;
//     getName?: () => void;
// }

// let userDetails :Details = {
//     name:"praveen",
//     age:"25",                             // union
//     place:"kochi",
//     salary:50000,
    // getName() {                        // optional
    //     console.log(this.name)
    // },
//}

// Functions

type Details = {
    name:string;
    age:number | string;
    place:string;
    salary:number;
    getName?: () => void;
}

let userDetails :Details = {
    name:"praveen",
    age:"25",                             // union
    place:"kochi",
    salary:50000,
}

function getUserName(userDetails:Details){
    return userDetails.name
}

getUserName(userDetails)


