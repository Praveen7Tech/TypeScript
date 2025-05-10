

// //Promise

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

// const fetchData = () : Promise<string> => {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve ("Data fetched successfully")
//         },100)
//     })
// }

// fetchData()
// .then(result => console.log(result))


// Async Function

// function fetchData() : Promise<string> {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve ("Data fetched succesfully compleated..")
//         }, 100)
//     })
// }

// async function getData () {
//     const data = await fetchData()
//     console.log(data)
// }

// getData()


// // INHERITANCE 

// class Animal {
//     name : string;
//     constructor(name : string) {
//         this.name = name
//     }

//     makeSound() : void {
//         console.log(`${this.name} makes sound..`)
//     }
// }

// class Dog extends Animal {
//     bark() : void {
//         console.log(`${this.name} bark`)
//     }
// }

// // const dog = new Dog("Thanos")

// // dog.makeSound()
// // dog.bark()
// // console.log(dog.name)


// // INTERFACE 

// // interface Person {
// //     name : string;
// //     age : number;
// //     graduated : boolean;
// // }

// // const user : Person = {
// //     name : "praveen",
// //     age : 25,
// //     graduated : true
// // }

// // CLASS 

// // class Person {
// //     name : string;
// //     age : number;

// //     constructor(name: string, age : number) {
// //         this.name = name 
// //         this.age = age
// //     }

// //     intro() : void {
// //         console.log(`Hi my name is ${this.name} and i am ${this.age} years old`)
// //     }
// // }

// // const person = new Person("praveen",25)

// // person.intro()


// // GETTERS AND SETTERS

// // class Employee {
// //     private _salary : number = 0

// //     get salary() : number {
// //         return this._salary
// //     }

// //     set salary(value : number) {
// //         this._salary = value
// //     }
// // }


// // const emp = new Employee()
// // console.log(emp.salary)
// // emp.salary = 10000
// // console.log(emp.salary)


// // TYPE ASSERTION 
// // const input1 = <HTMLInputElement>document.getElementById("username")
// // const input = document.getElementById("username") as HTMLInputElement
// // console.log(input.value)

// // const input2 : any = "hello world"
// // const length = (input2 as string).length
// // console.log(length)


// /// API FETCH 
// // interface Data {
// //     id : number;
// //     name : string
// // }

// // async function fetchData() : Promise<void> {
// //     try {
// //         const response = await fetch('http://sample.com')
// //         const data : Data = await response.json()

// //         console.log("Fetched data", data)
// //     } catch (error) {
// //         console.error("Error while fetching data..", error)
// //     }
// // }

// // fetchData()


// /////////////////////////////////////////////////


// // MAPPED TYPES

// interface Person {
//     name : string;
//     age : number;
//     email : string;
// }

// type read = Readonly<Person>

// type readonly = {
//     readonly name : string
//     readonly age : string
// }

// type part = Partial<Person>

// type partial = {
//     name ?: string
//     age ?: number
//     email ?: string
// }

// type pic = Pick<Person, "name">

// type omit = Omit<Person, "age">

// type record = Record<string, number>



// ////////////////////////////////


// function Area(val1 : number, val2 ?: number) : number {
//     if(val2 === undefined){
//         return val1 * val1
//     }else{
//         return val1 * val2
//     }
// }

// console.log(Area(5))
// console.log(Area(5,4))














// export {}