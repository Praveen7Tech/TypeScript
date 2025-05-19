
Getters ans Setters

class Person {
    private _name : string
    constructor(name : string){
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set name(newName : string) {
        this._name = newName
    }
}

const person = new Person("Praveen")

console.log(person.name)

Method Overriding

class Animal {
    speak() : void {
        console.log("Animal speaks")
    }

}

class Dog extends Animal {
    speak() : void {
        console.log("Dog bark..")
    }
}

const dog = new Dog()
dog.speak()


class

class Person {
    name : string;
    age : number
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`hai my name is ${this.name} and i am ${this.age} years old`)
    }
}

const person = new Person("praveen", 25)

person.greet()


Static properties and methods

class Maths {
    static num = 10
    static multiply(value : number): number {
        return value * this.num
    }
}

console.log(Maths.num)
console.log(Maths.multiply(5))



Method Overloading

class Operation {
    add(a : number, b : number) : number;
    add(a : string, b : string) : string;

    add(a: any, b : any) : any {
        return a + b
    }
}

const operation = new Operation()

console.log(operation.add(5,10))
console.log(operation.add("hello", "world"))


Encapsulation

class BankAccount {
    private balance : number = 0

    deposite(amount : number){
        if(amount > 0){
            this.balance += amount
        }
    }

    getBalance() : number {
        return this.balance
    }
}

const account = new BankAccount()

account.deposite(500)
console.log(account.getBalance())
console.log(account.balance())


KeyOf 

type Person = {
    name : string;
    age : number
}
type PersonKey = keyof Person; // "name" | "age"

////
function personKey<T,K extends keyof T> (obj : T, key : K) : T[K] {
    return obj[key]
}
const person = {name :"Praveen", age :25}
 const name = personKey(person, "name")


// MAPPED TYPES

interface Person {
    name : string;
    age : number
}

// partial
type partialPerson = Partial<Person>

// readonly
type readOnlyPerson = Readonly<Person>

// pick
type pickName = Pick<Person, "name">

// omitt
type personWithoutage = Omit<Person, "age">

// record
type StringMap = Record <string, number>

export {}