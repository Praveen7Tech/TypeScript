
function detectType (val :  number | string) {
    if (typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 5;
}


function provideId(id : string | null){
    if(!id){
        console.log("please provide a Id")
        return
    }
    id.toLowerCase()
}


function printAll(strs : string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s)
            }
        }else if(typeof strs === "string"){
            console.log(strs)
        }
    }
}


//-------------------//

type fish = {swim : () => void}
type bird = {fly : () => void}

function isFish(pet : fish | bird): pet is fish {
    return (pet as fish).swim !== undefined
}


function getFoof(pet : fish | bird) {
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet 
        return "bird food"
    }
}





interface Circle {
    kind : "circle"
    radius : number
}

interface Square {
    kind : "square"
    side : number
}

interface rectangle {
    kind : "rectagle"
    length : number
    width : number
}

type Shape = Circle | Square | rectangle

// function getTrueShape(shape : Shape){
//     if(shape.kind === "circle"){
//         return Math.PI + shape.radius ** 2
//     }
//     return shape.side * shape.side
// }

function getAre (shape : Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI + shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectagle":
            return shape.length * shape.width    
        default:
            const _defaultforShape : never = shape
            return _defaultforShape        
    }
}