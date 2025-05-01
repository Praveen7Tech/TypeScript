
abstract class TakePhot {
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    abstract getSepia() : void
    getreelTime () : number{
        // calculation happens
        return 12
    }
}


class Instagram extends TakePhot {
    constructor(
        public camersMode : string,
        public filter : string,
        public burst : number
    ){
        super(camersMode,filter)
    }
    getSepia() : void {
        console.log("sepia")
    }
}

const pr = new Instagram("test","filter", 1)

pr.getreelTime()