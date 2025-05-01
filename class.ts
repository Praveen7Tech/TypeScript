
// class User {
//     readonly id : number
//     constructor (
//         public email : string,
//         public name : string,
//         private userid : number
//         ){
//     }
// }

// const prave =new User("praveen@gmail.com","haii",1)

//-----------------//

// GETTERS AND SETTERS

class User {

    // while using the protector it acts like private and is use in the another class that inherits this parent
    protected _courseCount = 1

    readonly id : number
    constructor (
        public email : string,
        public name : string,
        private userid : number
        ){
    }

    get getAppleEmail() : string {
        return `apple ${this.email}`
    }

    get courseCount() : number {
        return this._courseCount
    }

    set courseCount (courseNum) {
        if(courseNum <= 1){
            throw new Error ("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class subUser extends User {
    isFamily : boolean = true
    chageCourseCount(){
        this._courseCount = 2
    }
}

const prave =new User("praveen@gmail.com","haii",1)






export {}