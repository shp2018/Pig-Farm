

enum whitebreedEnum{
    Large = "Large",
    Chester = "Chester",
    American= "American",
    Welsh= "Welsh",
    Middle= "Middle"
}

enum blackbreedEnum{
    Berkshire = "Berkshire",
    Hampshire = "Hampshire",
    Fengjing= "Fengjing",
    Jeju = "Jeju",
    Meishan = "Meishan"
}

enum chestnutbreedEnum{
    Duroc = "Duroc",
    Yorkshire = "Yorkshire",
    Bengali = "Bengali",
    Kunekune = "Kunekune",
    Oxford = "Oxford",
    
}
enum greybreedEnum{
    Landrace = "Landrace",
    Juliana = "Juliana",
    Linderödssvin = "Linderödssvin",
    Tamworth = "Tamworth",
    Turopolje = "Turopolje"
}

function makeEnum(enumObject:any){
    var all= [];
    for(var key in enumObject){
         all.push(enumObject[key])

    }
    return all
}


var categoryList = makeEnum(whitebreedEnum); 
var GreyBreedArray = makeEnum(greybreedEnum);
var BlackBreedArray = makeEnum(blackbreedEnum);
var WhiteBreedArray = makeEnum(whitebreedEnum);
var ChestnutBreedArray = makeEnum(chestnutbreedEnum);



abstract class Pig{
    constructor(
        public name:string, 
        public color:string,
        public height:number,
        public weight:number,
        public personality:string
        ){

    }
}


class White extends Pig {
    speed: number;
    breed: string;
    constructor(n:string,c:string,h:number,w:number,sp:number,b:string,p:string){
        super(n,c,h,w,p) // constructor for Pig
        this.speed = sp
        this.breed = b
    }

}

class Grey extends Pig {
    swimming: number;
    breed: string;
    constructor(n:string,c:string,h:number,w:number,sw:number, b:string,p:string){
        super(n,c,h,w,p) // constructor for Pig
        this.swimming = sw
        this.breed = b
    }

}

class Chestnut extends Pig {
    language: string;
    breed: string;
    constructor(n:string,c:string,h:number,w:number,lan:string,b:string,p:string){
        super(n,c,h,w,p) // constructor for Pig
        this.language = lan
        this.breed = b
    }

}
class Black extends Pig {
    strength: number;
    breed: string;
    constructor(n:string,c:string,h:number,w:number,str:number,b:string,p:string){
        super(n,c,h,w,p) // constructor for Pig
        this.strength = str
        this.breed = b
    }
}










