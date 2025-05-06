
// interface for class implimentation

interface Animal {
    name : string;
    speak() : void;
}

class Dog implements Animal {
    name: string;

    constructor(name:string){
        this.name = name
    }

    speak(){
        console.log(`${this.name} says hello..`)
    }
}

const myDog = new Dog("Thanos")

myDog.speak()


export{



    
}