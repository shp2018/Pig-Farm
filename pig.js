"use strict";
var whitebreedEnum;
(function (whitebreedEnum) {
    whitebreedEnum["Large"] = "Large";
    whitebreedEnum["Chester"] = "Chester";
    whitebreedEnum["American"] = "American";
    whitebreedEnum["Welsh"] = "Welsh";
    whitebreedEnum["Middle"] = "Middle";
})(whitebreedEnum || (whitebreedEnum = {}));
var blackbreedEnum;
(function (blackbreedEnum) {
    blackbreedEnum["Berkshire"] = "Berkshire";
    blackbreedEnum["Hampshire"] = "Hampshire";
    blackbreedEnum["Fengjing"] = "Fengjing";
    blackbreedEnum["Jeju"] = "Jeju";
    blackbreedEnum["Meishan"] = "Meishan";
})(blackbreedEnum || (blackbreedEnum = {}));
var chestnutbreedEnum;
(function (chestnutbreedEnum) {
    chestnutbreedEnum["Duroc"] = "Duroc";
    chestnutbreedEnum["Yorkshire"] = "Yorkshire";
    chestnutbreedEnum["Bengali"] = "Bengali";
    chestnutbreedEnum["Kunekune"] = "Kunekune";
    chestnutbreedEnum["Oxford"] = "Oxford";
})(chestnutbreedEnum || (chestnutbreedEnum = {}));
var greybreedEnum;
(function (greybreedEnum) {
    greybreedEnum["Landrace"] = "Landrace";
    greybreedEnum["Juliana"] = "Juliana";
    greybreedEnum["Linder\u00F6dssvin"] = "Linder\u00F6dssvin";
    greybreedEnum["Tamworth"] = "Tamworth";
    greybreedEnum["Turopolje"] = "Turopolje";
})(greybreedEnum || (greybreedEnum = {}));
function makeEnum(enumObject) {
    var all = [];
    for (var key in enumObject) {
        all.push(enumObject[key]);
    }
    return all;
}
var categoryList = makeEnum(whitebreedEnum);
var GreyBreedArray = makeEnum(greybreedEnum);
var BlackBreedArray = makeEnum(blackbreedEnum);
var WhiteBreedArray = makeEnum(whitebreedEnum);
var ChestnutBreedArray = makeEnum(chestnutbreedEnum);
class Pig {
    constructor(name, color, height, weight, personality) {
        this.name = name;
        this.color = color;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
}
class White extends Pig {
    constructor(n, c, h, w, sp, b, p) {
        super(n, c, h, w, p); // constructor for Pig
        this.speed = sp;
        this.breed = b;
    }
}
class Grey extends Pig {
    constructor(n, c, h, w, sw, b, p) {
        super(n, c, h, w, p); // constructor for Pig
        this.swimming = sw;
        this.breed = b;
    }
}
class Chestnut extends Pig {
    constructor(n, c, h, w, lan, b, p) {
        super(n, c, h, w, p); // constructor for Pig
        this.language = lan;
        this.breed = b;
    }
}
class Black extends Pig {
    constructor(n, c, h, w, str, b, p) {
        super(n, c, h, w, p); // constructor for Pig
        this.strength = str;
        this.breed = b;
    }
}
