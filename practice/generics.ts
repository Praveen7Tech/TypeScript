
const score : Array<number> = []
const name : Array<string> = []

function identityOne(val : boolean | number) : boolean | number{
    return val
}

function identityTwo(val : any) : any {
    return val
}

function identityThree <Type>(val : Type) : Type {
    return val
}


function identityFour <T>(val : T) : T {
    return val
}

interface Bootle {
    brand : string,
    type : number
}

//identityFour<Bootle> ({})


//----------------//

//generic in array and arrow functions

function getSearchProducts <T>(products : T[]) : T {
    // some datatbase operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,> (products : T[]) : T => {
    // some database operations
    const myIndex = 4
    return products[myIndex]
}

interface DataBase {
    connection : string,
    userName : string,
    passWord : string
}

function anotherFunction <T,U extends DataBase>(valOne : T, valTwo : U) : Object {
    return {
        valOne,
        valTwo
    }
}

//anotherFunction(3,{})

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sellabel <T> {
    public cart : T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}








export {}