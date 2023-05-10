interface PigServices {
    add(p: Pig): void;
    getAll(): Pig[];
    delete(x:number): void;
 
}


class blackpigController implements PigServices {
    pig: Black[];
    constructor() {
        this.pig = []
    }
    add(p: Black): void {
        this.pig.push(p)
        
    }
    getAll(){
        return this.pig
    }
    delete(x:number): void {
        var index = x
        this.pig.splice(index,1)
        bstore();
        location.reload();
        
}

   

}
class whitepigController implements PigServices {
    pig: White[];
    constructor() {
        this.pig = []
    }
    add(p: White): void {
        this.pig.push(p)
      
    }
    getAll(){
        return this.pig
    }
    delete(x:number): void {
        var index = x
        this.pig.splice(index,1)
        wstore();
        location.reload();
}


}


class chestnutpigController implements PigServices {
    pig: Chestnut[];
    constructor() {
        this.pig = []
    }
    add(p: Chestnut): void {
        this.pig.push(p)
       
    }
    getAll(){
        return this.pig
    }
    delete(x:number): void {
        var index = x
        this.pig.splice(index,1)
        cstore();
        location.reload();
    
}
 
}
class greypigController implements PigServices {
    pig: Grey[];
    constructor() {
        this.pig = []
    }
    add(p: Grey): void {
        this.pig.push(p)
       
    }
    getAll(){
        return this.pig
    }
    delete(x:number): void {
        var index = x
        this.pig.splice(index,1)
        gstore();
        location.reload();
}



}
var wpig = new whitepigController();
var bpig = new blackpigController();
var cpig = new chestnutpigController();
var gpig = new greypigController();

function wstore(){
    var wobj = wpig
    localStorage.wpig= JSON.stringify(wobj)
}

function gstore(){
    var gobj = gpig
    localStorage.gpig= JSON.stringify(gobj)
}
function bstore(){
    var bobj = bpig
    localStorage.bpig= JSON.stringify(bobj)
}
function cstore(){
    var cobj = cpig
    localStorage.cpig= JSON.stringify(cobj)
}


function deleteTb(){
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("infoTable");
    table.deleteRow(-1);
    table.deleteRow(0);
    location.reload();
}

function moreinfo(name:string,category:string,breed:string,height:number,weight:number,skillName:string,skillVal:string,personality:string) {
    var pigImg = <HTMLImageElement>document.getElementById("selectpigimg") 
    var nameImge = <HTMLElement>document.getElementById("imgname")
    var Weight = <HTMLElement>document.getElementById("wVal")
    var Height = <HTMLElement>document.getElementById("hVal")
    var table = <HTMLTableElement>document.createElement("TABLE")
    var scale = <HTMLImageElement>document.getElementById("scale")
    var ruler = <HTMLImageElement>document.getElementById("ruler")
    var skills = <HTMLElement>document.getElementById("skills")
    var lan = <HTMLElement>document.getElementById("lan")
    var skillimg = <HTMLImageElement>document.getElementById("skillimg")
    table.setAttribute("id", "infoTable");
    document.body.appendChild(table);
    var row1 = table!.insertRow(0);
    var c1 = row1.insertCell(0);
    var c2 = row1.insertCell(1);
    var c3 = row1.insertCell(2);
    var c4 = row1.insertCell(3);
    var c5 = row1.insertCell(4);
    var c6 = row1.insertCell(5);
    var c7 = row1.insertCell(6);
    var c8 = row1.insertCell(7);
    c1.innerHTML = "Name"
    c2.innerHTML = "Category"
    c3.innerHTML = "Breed"
    c4.innerHTML = "Height"
    c5.innerHTML = "Weight"
    c6.innerHTML = skillName
    c7.innerHTML = "Personality"
    var butn = document.createElement('input');
    butn.type = "button";
    butn.className = "butn";
    butn.value = "X"
    c8.appendChild(butn)
    butn.onclick = function() {deleteTb()}

    var row2 = table!.insertRow(-1);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);
    var cell5 = row2.insertCell(4);
    var cell6 = row2.insertCell(5);
    var cell7 = row2.insertCell(6);

    cell1.innerHTML = name
    cell2.innerHTML = category
    cell3.innerHTML = breed
    cell4.innerHTML = String(height)
    cell5.innerHTML = String(weight)
    cell6.innerHTML = skillVal
    cell7.innerHTML = personality
    if (category=="Black"){
        pigImg.src = "bpigimg.jpeg"
        scale!.style.display="block"
        ruler!.style.display="block"
        pigImg!.style.display="block"
        nameImge!.style.left="730px"
        nameImge!.innerText = String(name+" ("+breed+")");
        Weight!.innerHTML = String(weight);
        Height!.innerHTML = String(height);
        nameImge!.style.color = "white"
        nameImge!.style.display="block"
        Weight!.style.display="block"
        Height!.style.display="block"
        skills!.innerText=skillVal
        skillimg.src= "strength.png"
        skills!.style.display="block"
        skillimg!.style.display="block"
    }
    if (category=="Grey"){
        pigImg.src = "gpigimg.jpeg"
        scale!.style.display="block"
        ruler!.style.display="block"
        pigImg!.style.display="block"
        nameImge!.style.left="730px"
        nameImge!.innerText = String(name+" ("+breed+")");
        Weight!.innerHTML = String(weight);
        Height!.innerHTML = String(height);
        nameImge!.style.display="block"
        Weight!.style.display="block"
        Height!.style.display="block"
        skills!.innerText=skillVal
        skillimg.src= "swim.png"
        skills!.style.display="block"
        skillimg!.style.display="block"
    }
    if (category=="White"){
        pigImg.src = "wpigimg.jpeg"
        scale!.style.display="block"
        ruler!.style.display="block"
        pigImg!.style.display="block"
        nameImge!.style.left="730px"
        nameImge!.innerText = String(name+" ("+breed+")");
        Weight!.innerHTML = String(weight);
        Height!.innerHTML = String(height);
        nameImge!.style.display="block"
        Weight!.style.display="block"
        Height!.style.display="block"
        skills!.innerText=skillVal
        skillimg.src= "run.png"
        skills!.style.display="block"
        skillimg!.style.display="block"
    }
    if (category=="Chestnut"){
        pigImg.src = "cpigimg.jpeg"
        scale!.style.display="block"
        ruler!.style.display="block"
        pigImg!.style.display="block"
        nameImge!.style.left="730px"
        nameImge!.innerText = String(name+" ("+breed+")");
        Weight!.innerHTML = String(weight);
        Height!.innerHTML = String(height);
        nameImge!.style.display="block"
        Weight!.style.display="block"
        Height!.style.display="block"
        lan!.style.display="block"
        lan!.innerText = skillVal
    
    }



}
function confirmdelete(name:string,category:string){
    if(confirm("Are you sure you want to delete?")==true){
    deletebutton(name,category)
    }
   
    
}

function deletebutton(name:string,category:string){
    
    if(category=="Black"){
        var barr = []
        var black = bpig.pig
        for(var i=0; i<black.length;i++){
            barr.push(black[i].name)
        }
        bpig.pig.splice(barr.indexOf(name),1)
        bstore()
        
    } 
    else if(category=="White"){
        var warr = []
        var white = wpig.pig
        for(var i=0; i<white.length;i++){
            warr.push(white[i].name)
        }
        wpig.pig.splice(warr.indexOf(name),1)
        wstore()
        
    } 
    else if(category=="Grey"){
        var garr = []
        var grey = gpig.pig
        for(var i=0; i<grey.length;i++){
            garr.push(grey[i].name)
        }
        gpig.pig.splice(garr.indexOf(name),1)
        gstore()
        
    } 
    else{
        var carr = []
        var chestnut = cpig.pig
        for(var i=0; i<chestnut.length;i++){
            carr.push(chestnut[i].name)
        }
        cpig.pig.splice(carr.indexOf(name),1)
        cstore()
        
    } 
   
}


function myFunction(name:string,category:string,breed:string,height:number,weight:number,skillName:string,skillVal:any,personality:string) {
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("mainTb");
    var row = table!.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  
   

    cell1.innerText = name;
    cell2.innerText = category;


    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn";
    btn.value = "moreinfo"
    cell3.appendChild(btn)
    btn.onclick = function() {
        moreinfo(name,category,breed,height,weight,skillName,skillVal,personality)
    }
  
    var bton = document.createElement('input');
    bton.type = "button";
    bton.className = "bton";
    bton.value = "delete"
    bton.onclick = function(){
        confirmdelete(name,category)
        location.reload();
    }
    cell4.appendChild(bton)

    
    
  
}
 


  
