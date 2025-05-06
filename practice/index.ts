let name : string = "praveen"
let age : number = 25
let isCool : boolean = true

function greet(name: string) : string {
    return `Hello ${name}`
}

console.log(greet(name))
console.log("age", age);
console.log("name",name);


//Array & objects

let scores:number[] = [1,2,3,4,5]

type person = {
    name:string; 
    age:number
}

const people : person[] = [
    {name : "praveen", age : 25},
    {name : "rohith", age : 27},
    {name : "felwin", age :22}
];

for(let person of people){
    console.log(`${person.name} is ${person.age} years old.`)
}


function filterAdults(people: person[],minAge : number) : person[]{
    return people.filter(person => person.age > minAge);
}

const adults = filterAdults(people, 23)
console.log(adults)

export{}