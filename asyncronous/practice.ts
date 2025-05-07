// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched using Promise!");
//       }, 1000);
//     });
//   }
  
//   fetchData().then(data => {
//     console.log(data);
//   });
  

function fetchDataAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched using async/await!");
      }, 1000);
    });
  }
  
  async function getData() {
    const data = await fetchDataAsync();
    console.log(data);
  }
  
   getData();

// type Users = Record<string, number>;
// const userAges: Users = { Abhijith: 25, Babu: 30 };
//maped types]
  
// type Readonly<T>={
//   readonly[k in keyof T]?:T[k]
// }
// type ReadonlyUser<T> = {
//   readonly [K in keyof T]: T[K];
// };

// type ReadonlyUserInfo = ReadonlyUser<User>;

// const readonlyUser: ReadonlyUserInfo = {
//   name: "Abhijith",
//   age: 22,
//   isAdmin: false
// };

// readonlyUser.age = 23; ❌ Error: Cannot assign to 'age' because it is a read-only property.

// type person ={
//   name :string,
//   age:number
// }
// type personkeys = keyof person
// let key :personkeys[] =["name","age"]
// console.log(key)

// //union
// let skills: (string|number)[] = ["HTML", "CSS", "JavaScript",19,34,55];

//   Tuples

//   Definition: Defines an array with fixed length and types.

//   let user: [string, number] = ["Abhijith", 25];

// Utility types ellam nokatto 

// Readonly 
// Pick 
// Omit
// Required 
// Partial

//   Enums

//   Definition: Enums define a set of named constants.

//   enum Status {
//     Pending,
//     InProgress,
//     Completed
//   }
  
//   let taskStatus: Status = Status.InProgress;
//   console.log(taskStatus); // Output: 1 (Enums are indexed by default)

// utility 
// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Readonly<user>={
//     name:'dadsasd',
//     age:44
// }
// userDetails.name
// userDetails.age =323

//Partial

// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Partial<user>={
//     name:'dadsasd',
//     age:44
// }

//required 

// type user ={
//     name :string;
//     age ?:number
// }
// const userDetails :Required<user>={
//     name:'dadsasd',
//     age:44
// }

//pick

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Pick<user,'name'|'age'>={
//     name:'dadsasd',
//     age:44
// }

//omit

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Omit<user,'salary'>={
//     name:'dadsasd',
//     age:44
// }


class Car {
    brand : string
    
    constructor(brand : string){
      this.brand = brand
    }
    showBrand(){
      console.log(`car brand is: c ${this.brand}`)
    }
  }
  let car1 = new Car("Toyota")
  car1.showBrand()

//   interface Person{
//     name:string;
//     age:number
// }

// class Student implements Person{
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.age = age;
//         this.name =name
//     }
//     showout(){
//         console.log(${this.name} age is :${this.age})
//     }
// }
// let c1 = new Student("abhi",22)
// c1.showout()
 

  // Method Overriding
  
class Parent {
    greet(){
      console.log("helloo from parent")
    }
  }
  class child extends Parent{
    greet(){
      console.log("heloo from child")
    }
  }
  
  let c = new child()
  c.greet()


  //method overloading


  class MathOperation{
    add (a:number,b:number,c?:number):number{
      if(c){
        return a+b+c
      }else{
        return a+b
      }
    }
  }
  let math = new MathOperation()
  console.log(math.add(1,2,3))
  console.log(math.add(1,2))

  // class Logger {
  //   log(message: string): void;
  //   log(id: number): void;
  //   log(value: string | number): void {
  //     console.log("Logged:", value);
  //   }
  // }
  
  // const logger = new Logger();
  // logger.log("Hello");
  // logger.log(123);
  


  //encapsulation

  
class Person {
    private name :string
    constructor(name:string){
      this.name = name
    }
    getName(){
      return this.name
    }
  }
  
  let p1 = new Person("john")
  console.log(p1.getName())


  //inheritance

  class Animal {
    sound :string
  
    constructor(sound : string){
      this.sound = sound
    }
    makeSound(){
      console.log(this.sound)
    }
  }
  
  class Dog extends Animal{
    constructor(){
      super("wooffff")
    }
  }
  
  let dog = new Dog()
  dog.makeSound()

//multiple inheritance
  interface A {
    methodA(): void;
  }
  
  interface B {
    methodB(): void;
  }
  
  class C implements A, B {
    methodA(): void {
      console.log("Method A");
    }
  
    methodB(): void {
      console.log("Method B");
    }
  }
  const obj = new C();
  obj.methodA(); // Output: Method A    
    obj.methodB(); // Output: Method B

    
  //polymorphism

  class Shape {
    draw(){
      console.log("drawing a shape")
    }
  }
  class Circle extends Shape{
    draw(){
      console.log("drawing a circle")
    }
  }
  
  let s1 = new Shape()
  s1.draw()

  
let c1 = new Circle();
c1.draw();

//abstract class


// abstract class vehicle {
//     abstract move() : void
//   }
//   class Car extends vehicle{
//     move(){
//       console.log("car is moving")
//     }
//   }
//   let myCar = new Car()
//   myCar.move()


// interface Vehicle{
//   move():void
  
// }
// class Car implements Vehicle{
//     move(){
//         console.log("car is moveing")
//     }
// }
// const mycar =new Car()
// mycar.move()


//static method

// class utility {
//     static pi = 3.14
  
//     static square(num :number){
//       return num * num
//     }
//   }
  
//   console.log(utility.pi)
//   console.log(utility.square(5))




//acces modifiers

// class Student {
//   public name: string;
//   private id: number;
//   protected marks: number;

//   constructor(name: string, id: number, marks: number) {
//     this.name = name;
//     this.id = id;
//     this.marks = marks;
//   }

//   public showName() {
//     console.log(this.name);     // ✅
//     console.log(this.id);       // ✅
//     console.log(this.marks);    // ✅
//   }
// }

// const s = new Student("Abi", 101, 90);
// console.log(s.name); // ✅
// // console.log(s.id); // ❌ Error: private
// // console.log(s.marks); // ❌ Error: protected


//getters and setters

// class Employee {
//   private _salary: number = 0;

//   get salary(): number {
//     return this._salary;
//   }

//   set salary(value: number) {
//     if (value >= 0) {
//       this._salary = value;
//     }
//   }
// }

// const emp = new Employee();
// emp.salary = 5000;
// console.log(emp.salary); // 5000


//Infer types (Implicit types)

// let userNAME = "John Doe";
// let subscribers = 399_000;
     
//defining types explicitly

// let userName: string = "John Doe";
// let subscribers: number = 399_000;
// let isActive: boolean = true;
// let skills :string[]= ["HTML", "CSS", "JavaScript"];
// let count : number [] = [1, 2, 3, 4, 5];
// let emptyArray :[] = [];

// let userDetails: {name:string; age:number;salary:number} ={
//      name : "John Doe",
//      age :49,
//      salary :2000
// }




//  Interface

// interface  Details {
//     name: string;
//     age: number;
//     salary: number;
//     getName: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// Type 

// type Details ={
//     name: string;
//         age: number;
//         salary: number;
//         getName: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }


//union/optional types

// type Details ={
//     name: string;
//         age: number|string;
//         salary: number;
//         getName?: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// //union
// let skills: (string|number)[] = ["HTML", "CSS", "JavaScript",19,34,55];

// //optional
// let salary: number | undefined = 2000;

// interface Details {
//     salary?: number;
// }
// let emp :Details={salary:2444}


//functions


// type Details ={
//     name: string;
//         age: number|string;
//         salary: number;
//         getName?: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// function getUserName(userDetails:Details) {
//     return userDetails.age
// }

// getUserName(userDetails);
//---------------------------------------------------
// function names ({name, age, salary}: {name:string; age:number; salary:number}) {
//     return name
// }
// names({name:"John Doe", age: 49, salary: 2000})

// interface Details {
//     name:string;
//     age:number;
//     salary:number;
// }

// function names ({name}:Details){
//     return name;
// }
// console.log(names({name:"John Doe", age: 49, salary: 2000}))


//Named types
// type status = "active" | "inactive" | "pending";

//generics--------------------------------------------

// function getage<T>(age:T):T {
//     return age;
// }
// console.log(getage('49'))
// console.log(getage(30))
//----------------------------------
// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail ={
//     firstname:string;
//     role :string
// }

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     firstname:'abijit',
//     role:'admin',
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)
//------------------------------------------------------------



// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail = userDetail &{    userdetails nte admindetails lek merge akkii
//     role :string;
// }

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     role:'admin',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)

//-------------------------------------------------------------

// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail = userDetail --- admindetails lek userdetails kodut

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)

//-------------------------------------------------------------



// interface userDetail {
//     name:string;
//     age :number
// }


// interface adminDetail extends userDetail {}

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)




//ennums

// enum StatusType{
//   pending =1,
//   complete,
//   failed
// }
// function getstatus (message:string,status:StatusType){
//     console.log(status)
// }
// getstatus(StatusType.complete)

//enum
// enum Color  {red=3, green, blue}
// let c:Color = Color.green
// console.log(c);

// as const 

// let userName  = 'debug media' as const
// userName = 'debug media'

//keyof/typeof


// type Person = { name: string; age: number };
// type Keys = keyof Person;

// type person ={
//   name :string,
//   age:number
// }
// type personkeys = keyof person
// let key :personkeys[] =["name","age"]
// console.log(key)

// utility 
// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Readonly<user>={
//     name:'dadsasd',
//     age:44
// }
// userDetails.name
// userDetails.age =323

//Partial

// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Partial<user>={
//     name:'dadsasd',
//     age:44
// }

//required 

// type user ={
//     name :string;
//     age ?:number
// }
// const userDetails :Required<user>={
//     name:'dadsasd',
//     age:44
// }

//pick

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Pick<user,'name'|'age'>={
//     name:'dadsasd',
//     age:44
// }

//omit

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Omit<user,'salary'>={
//     name:'dadsasd',
//     age:44
// }


//union nte case il 
//exclude

// type StatusType ='pending'|'completed'|'failed'
// const status :Exclude<StatusType ,'pending'> = ''





//  Inheritance
// class animal {
//     speak():void{
//         console.log("Animal speaks");
        
//     }
// }
// class Cat extends animal{
//     speak():void{
//         console.log("Cat barks");
//     }
// }
// const myCat = new Cat()
// myCat.speak()


// function fetchData(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched using Promise!");
//     }, 1000);
//   });
// }

// fetchData().then(data => {
//   console.log(data);
// });


// function fetchDataAsync(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched using async/await!");
//     }, 1000);
//   });
// }

// async function getData() {
//   const data = await fetchDataAsync();
//   console.log(data);
// }

// getData();


// getData();

//Function Overloading:
// function fetchData(id:number):number;
// function fetchData(id:string):string;

// function fetchData(id :any):any{
//     return id
// }

// console.log(fetchData(443))




//unknown vs any

function handleInput(input: unknown) {
    if (typeof input === "string") {
      console.log("String length:", input.length);
    } else if (typeof input === "number") {
      console.log("Square:", input * input);
    }else if(typeof input ==="boolean"){
      console.log(input)
    }else if(Array.isArray(input) ){
      console.log(input)
    } else {
      console.log("Unknown type");
    }
  }
  handleInput("hello");
  handleInput(7);
  handleInput(true);
  handleInput([1, 2, 3]);
  handleInput(null);
  handleInput({ name: "Abhi" });



  function add (num1 :number ,num2?:number):number{
    if(num2){
      return num1+num2
    }else{
      return num1
    }
  }
  console.log(add(3,3))
  
  

  function adds (...num:number[] ):number{
  return num.reduce((acc,curr)=>acc+curr,0)
  }
  console.log(adds(1,2,3,4,5))
  
  
  interface faces {
    name:number
  }
  let user :faces ={
   name :34
  }


  //decorators

  function First() {
    console.log("First factory");
    return function (target: any) {
      console.log("First decorator");
    };
  }
  @First()
  class Demo {}

  //maped types]
  
// type Readonly<T>={
//   readonly[k in keyof T]?:T[k]
// }
// type ReadonlyUser<T> = {
//   readonly [K in keyof T]: T[K];
// };

// type ReadonlyUserInfo = ReadonlyUser<User>;

// const readonlyUser: ReadonlyUserInfo = {
//   name: "Abhijith",
//   age: 22,
//   isAdmin: false
// };

// readonlyUser.age = 23; ❌ Error: Cannot assign to 'age' because it is a read-only property.

//condiytional types

// type IsString<T> = T extends string ? "Yes" : "No";

// type A = IsString<string>;  // 'Yes'
// type B = IsString<number>;  // 'No'

// // Define the type of the response
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }
  
//   // Fetch data from a public API
//   async function fetchPosts(): Promise<void> {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const posts: Post[] = await response.json();
      
//       // Log the first post
//       console.log("First Post Title:", posts[0].title);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   }
  
//   fetchPosts();
  

// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }
  
//   function fetchPostsPromise(): void {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((posts: Post[]) => {
//         console.log("First Post Title:", posts[0].title);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }
  
//   fetchPostsPromise();
  

// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched using Promise!");
//       }, 1000);
//     });
//   }
  
//   fetchData().then(data => {
//     console.log(data);
//   });
  

// function fetchDataAsync(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched using async/await!");
//       }, 1000);
//     });
//   }
  
//   async function getData() {
//     const data = await fetchDataAsync();
//     console.log(data);
//   }
  
//   getData();


// Type Annotations

// Definition: Type annotations specify the type of a variable, function parameter, or return value.

// let age: number = 25;
// let username: string = "Abhijith";
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, 10)); // Output: 15

// Generics

// Definition: Generics allow writing reusable and type-safe code that works with multiple data types.

// function identity<T>(value: T): T {
//     return value;
//   }
  
//   console.log(identity<number>(10));  // Output: 10
//   console.log(identity<string>("Hello")); // Output: Hello
  

//   Readonly Modifier

//   Definition: readonly prevents modification of properties in objects or arrays.

//   type Person = {
//     readonly name: string;
//     age: number;
//   };
  
//   let person: Person = { name: "Abhijith", age: 25 };
//   person.age = 26;  // ✅ Allowed
//   // person.name = "Babu"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
  

//   Enums

//   Definition: Enums define a set of named constants.

//   enum Status {
//     Pending,
//     InProgress,
//     Completed
//   }
  
//   let taskStatus: Status = Status.InProgress;
//   console.log(taskStatus); // Output: 1 (Enums are indexed by default)
  

//   Decorators

//   Definition: Decorators modify class behavior at runtime.

//   function Log(target: any, propertyKey: string) {
//     console.log(Property ${propertyKey} was accessed);
//   }
  
//   class User {
//     @Log
//     name: string = "Abhijith";
//   }
  

//   Type Assertions

//   Definition: Converts one type to another when we are sure about the type.

//   let input: unknown = "Hello TypeScript";
// let length = (input as string).length;  // ✅ Type Assertion
// console.log(length); // Output: 17

// Keyof Operator

// Definition: Extracts keys from a type as a union.

// type Person = { name: string; age: number };
// type Keys = keyof Person;  // "name" | "age"


// Partial

// Definition: Makes all properties of a type optional.

// type User = { name: string; age: number };
// const updateUser = (user: Partial<User>) => {
//   console.log(user);
// };
// updateUser({ name: "Abhijith" });  // ✅ Allowed


// ReturnType

// Definition: Extracts the return type of a function.

// function getUser() {
//     return { name: "Abhijith", age: 25 };
//   }
  
//   type UserType = ReturnType<typeof getUser>;  // { name: string; age: number }
  

//   Mapped Types

//   Definition: Creates a new type by transforming properties of another type.

//   type User = { name: string; age: number };
// type OptionalUser = { [K in keyof User]?: User[K] };  // Makes all properties optional

// Record

// Definition: Defines an object type with keys of one type and values of another.

// type Users = Record<string, number>;
// const userAges: Users = { Abhijith: 25, Babu: 30 };

// Infer

// Definition: Extracts types within conditional types.

// type ReturnTypeInfer<T> = T extends (...args: any[]) => infer R ? R : never;


// Type Alias

// Definition: Creates a custom type name.


// type User = { name: string; age: number };
// let user: User = { name: "Abhijith", age: 25 };


// Intersection (&)

// Definition: Combines multiple types into one.

// type A = { name: string };
// type B = { age: number };
// type AB = A & B;

// const person: AB = { name: "Abhijith", age: 25 };

// noImplicitAny

// Definition: If noImplicitAny is true in tsconfig.json, TypeScript enforces explicit types.

// function greet(name) {  // ❌ Error in TypeScript
//     return Hello, ${name};
//   }
  

//   never

//   Definition: Represents a type that never returns.

//   function throwError(message: string): never {
//     throw new Error(message);
//   }
  

//   Omit

//   Definition: Removes properties from a type.

//   type User = { id: number; name: string; age: number };
// type UserWithoutAge = Omit<User, "age">;  // { id: number; name: string }


// Mixins

// Definition: Combines multiple class functionalities.

// class CanWalk {
//     walk() {
//       console.log("Walking...");
//     }
//   }
  
//   class CanEat {
//     eat() {
//       console.log("Eating...");
//     }
//   }
  
//   class Person implements CanWalk, CanEat {
//     walk!: () => void;
//     eat!: () => void;
//   }
  
//   applyMixins(Person, [CanWalk, CanEat]);
  
//   function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach((baseCtor) => {
//       Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//         derivedCtor.prototype[name] = baseCtor.prototype[name];
//       });
//     });
//   }
  
//   const p = new Person();
//   p.walk();  // Output: Walking...
//   p.eat();  // Output: Eating...

  
//   Tuples

//   Definition: Defines an array with fixed length and types.

//   let user: [string, number] = ["Abhijith", 25];  // ✅ Allowed


// Example usage of Record

// type Role ="admin"|"user"
// type permissions = Record<Role,string[]>

// const roles:permissions={
//     admin:["read","write"],
//     user:["read"]
// }
// console.log(roles)


// type Users = Record<string, number>;
// const userAges: Users = { Abhijith: 25, Babu: 30 };

// function greet (name:string):string{
//   return heloo ${name}
// }
// console.log(greet("abhijith"))

// function greet (name:string,age?:number):string{
//   return age ? heloo${name},age: ${age} :heloo ${name}
// }
// console.log(greet("abhijith"))
// console.log(greet("abhijith",22))

// function greet (name:string ,age:number=23):string{
//   return helo${name},age:${age}
// }
// console.log(greet("Abhi"));
// console.log(greet("Abhi", 25));

// const add =(a:number,b:number):number=>a+b
// console.log(add(2,3))

// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// function identy<T>(value :T):T{
//   return value
// }
// console.log(identy<string>("eheeq"))


// function operate(a: number, b: number, callback: (x: number, y: number) => number): number {
//   return callback(a, b);
// }

// const result = operate(5, 3, (x, y) => x * y);
// console.log(result); 


// function sum<T>(a:number,b:number):T{
    //   return (a+b)as T 
    // }
    // console.log(sum<number>(1,2))
