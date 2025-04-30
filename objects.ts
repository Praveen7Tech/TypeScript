
type User = {
    readonly _id : string
    name : string
    email : string
    isActive : boolean
    creditCardDetails ?: number
}

let myUser : User = {
    _id : "1234",
    name : "Praveen",
    email : "praveen@gmail.com",
    isActive : true
}

myUser.email = "newEmail@gmail.com"
//myUser._id = "1234567"