interface User {
    readonly dbId : number
    email : string,
    userId : number,
    googleId ?: string,
    startTrail : () => string
    //startTrail () : string
    getCoupon (couponCode : string, value : number) : number
}

// re open
interface User {
    githubToken : string
}

// extends
interface Admin extends User {
    role : "Admin" | "User" | "Ta" | "Learner"
}

const praveen : User = {
    dbId : 123456 ,
    email : "praveen@gmail.com",
    userId : 1234,
    githubToken : "gitToken",
    startTrail : () =>{
        return "Strat Trial"
    },
    getCoupon : (code : "praveen10" , off : 50) => {
        return 100
    }
}

const praveenAdmin : Admin = {
    role : "Admin",
    dbId : 123456 ,
    email : "praveen@gmail.com",
    userId : 1234,
    githubToken : "gitToken",
    startTrail : () =>{
        return "Strat Trial"
    },
    getCoupon : (code : "praveen10" , off : 50) => {
        return 100
    }
}

praveen.email = "new@gmail.com"
//praveen.dbId = 1212