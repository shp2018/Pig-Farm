"use strict";
window.onload = function () {
    if (localStorage.getItem("wpig") === null) {
        wstore();
        location.reload();
    }
    if (localStorage.getItem("bpig") === null) {
        bstore();
        location.reload();
    }
    if (localStorage.getItem("cpig") === null) {
        cstore();
        location.reload();
    }
    if (localStorage.getItem("gpig") === null) {
        gstore();
        location.reload();
    }
    var w = JSON.parse(localStorage.wpig);
    var b = JSON.parse(localStorage.bpig);
    var g = JSON.parse(localStorage.gpig);
    var c = JSON.parse(localStorage.cpig);
    var wsorted = w.pig.sort((a, b) => a.name.localeCompare(b.name));
    var bsorted = b.pig.sort((a, b) => a.name.localeCompare(b.name));
    var gsorted = g.pig.sort((a, b) => a.name.localeCompare(b.name));
    var csorted = c.pig.sort((a, b) => a.name.localeCompare(b.name));
    for (var i = 0; i < w.pig.length; i++) {
        myFunction(String(w.pig[i].name), String(w.pig[i].color), String(w.pig[i].breed), Number(w.pig[i].height), Number(w.pig[i].weight), String("Speed"), Number(w.pig[i].speed), String(w.pig[i].personality));
        if (w.pig.length > 0) {
            wpig.add(w.pig[i]);
        }
    }
    for (var i = 0; i < b.pig.length; i++) {
        myFunction(String(b.pig[i].name), String(b.pig[i].color), String(b.pig[i].breed), Number(b.pig[i].height), Number(b.pig[i].weight), String("Strength"), Number(b.pig[i].strength), String(b.pig[i].personality));
        if (b.pig.length > 0) {
            bpig.add(b.pig[i]);
        }
    }
    for (var i = 0; i < g.pig.length; i++) {
        myFunction(String(g.pig[i].name), String(g.pig[i].color), String(g.pig[i].breed), Number(g.pig[i].height), Number(g.pig[i].weight), String("Swimming"), Number(g.pig[i].swimming), String(g.pig[i].personality));
        if (g.pig.length > 0) {
            gpig.add(g.pig[i]);
        }
    }
    for (var i = 0; i < c.pig.length; i++) {
        myFunction(String(c.pig[i].name), String(c.pig[i].color), String(c.pig[i].breed), Number(c.pig[i].height), Number(c.pig[i].weight), String("Language"), String(c.pig[i].language), String(c.pig[i].personality));
        if (c.pig.length > 0) {
            cpig.add(c.pig[i]);
        }
    }
    var addCategorySel = document.getElementById("category");
    var addBreedSel = document.getElementById("breed");
    var addSkillInput = document.getElementById("skill");
    var skillName = document.getElementById("skillName");
    var skillVal = document.getElementById("skillVal");
    var addbtn = document.getElementById("add");
    var submitbtn = document.getElementById("submit");
    var hiddenAdd = document.getElementById("addTb");
    var pigImg = document.getElementById("selectpigimg");
    var scale = document.getElementById("scale");
    var ruler = document.getElementById("ruler");
    var imgName = document.getElementById("imgname");
    addbtn.addEventListener('click', function () {
        if (hiddenAdd.style.display == 'block') {
            hiddenAdd.style.display = 'none';
        }
        else {
            hiddenAdd.style.display = 'block';
        }
        if (pigImg.style.display == 'block') {
            pigImg.style.display = 'none';
            scale.style.display = 'none';
            ruler.style.display = 'none';
        }
        else {
            pigImg.style.display = 'block';
            scale.style.display = 'block';
            ruler.style.display = 'block';
        }
    });
    submitbtn.addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var addedpigName = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
        var addedpigHeight = (_b = document.getElementById("height")) === null || _b === void 0 ? void 0 : _b.value;
        var addedpigWeight = (_c = document.getElementById("weight")) === null || _c === void 0 ? void 0 : _c.value;
        var addedpigCategory = (_d = document.getElementById("category")) === null || _d === void 0 ? void 0 : _d.value;
        var addedpigBreed = (_e = document.getElementById("breed")) === null || _e === void 0 ? void 0 : _e.value;
        var addedpersonailty = (_f = document.getElementById("personality")) === null || _f === void 0 ? void 0 : _f.value;
        var addedpigSkillName = (_g = document.getElementById("skillName")) === null || _g === void 0 ? void 0 : _g.innerText;
        var addedpigSkill = (_h = document.getElementById("skillVal")) === null || _h === void 0 ? void 0 : _h.value;
        var addedpigSkillMax = (_j = document.getElementById("skillVal")) === null || _j === void 0 ? void 0 : _j.max;
        var pigImg = document.getElementById("selectpigimg");
        var scale = document.getElementById("scale");
        var ruler = document.getElementById("ruler");
        var imgName = document.getElementById("imgname");
        var letters = /^[A-Za-z]+$/;
        if (addedpigCategory == "Black") {
            if (Number(addedpigSkill) <= Number(addedpigSkillMax)) {
                if (pigImg.style.display == 'block') {
                    pigImg.style.display = 'none';
                    imgName.style.display = 'none';
                    scale.style.display = 'none';
                    ruler.style.display = 'none';
                }
                else {
                    pigImg.style.display = 'block';
                    imgName.style.display = 'block';
                    scale.style.display = 'block';
                    ruler.style.display = 'block';
                }
                var newbPig = { name: String(addedpigName), color: String(addedpigCategory), height: Number(addedpigHeight), weight: Number(addedpigWeight), strength: Number(addedpigSkill), breed: String(addedpigBreed), personality: String(addedpersonailty) };
                bpig.add(newbPig);
                bstore();
                location.reload();
            }
            else {
                alert("Please enter a Strength value under 10! Your pig is not that strong!");
            }
        }
        else if (addedpigCategory == "White") {
            if (Number(addedpigSkill) <= Number(addedpigSkillMax)) {
                if (pigImg.style.display == 'block') {
                    pigImg.style.display = 'none';
                    imgName.style.display = 'none';
                    scale.style.display = 'none';
                    ruler.style.display = 'none';
                }
                else {
                    pigImg.style.display = 'block';
                    imgName.style.display = 'block';
                    scale.style.display = 'block';
                    ruler.style.display = 'block';
                }
                var newwPig = { name: String(addedpigName), color: String(addedpigCategory), height: Number(addedpigHeight), weight: Number(addedpigWeight), speed: Number(addedpigSkill), breed: String(addedpigBreed), personality: String(addedpersonailty) };
                wpig.add(newwPig);
                wstore();
                location.reload();
            }
            else {
                alert("Please enter a Speed value under 10! Your pig cant be that fast!");
            }
        }
        else if (addedpigCategory == "Chestnut") {
            if (addedpigSkill.match(letters)) {
                if (pigImg.style.display == 'block') {
                    pigImg.style.display = 'none';
                    imgName.style.display = 'none';
                    scale.style.display = 'none';
                    ruler.style.display = 'none';
                }
                else {
                    pigImg.style.display = 'block';
                    imgName.style.display = 'block';
                    scale.style.display = 'block';
                    ruler.style.display = 'block';
                }
                var newcPig = { name: String(addedpigName), color: String(addedpigCategory), height: Number(addedpigHeight), weight: Number(addedpigWeight), language: String(addedpigSkill), breed: String(addedpigBreed), personality: String(addedpersonailty) };
                cpig.add(newcPig);
                cstore();
                location.reload();
            }
            else {
                alert("Not a valid Language! Your pig doesnt speak numbers!");
            }
        }
        else if (addedpigCategory == "Grey") {
            if (Number(addedpigSkill) <= Number(addedpigSkillMax)) {
                if (pigImg.style.display == 'block') {
                    pigImg.style.display = 'none';
                    imgName.style.display = 'none';
                    scale.style.display = 'none';
                    ruler.style.display = 'none';
                }
                else {
                    pigImg.style.display = 'block';
                    imgName.style.display = 'block';
                    scale.style.display = 'block';
                    ruler.style.display = 'block';
                }
                var newgPig = { name: String(addedpigName), color: String(addedpigCategory), height: Number(addedpigHeight), weight: Number(addedpigWeight), swimming: Number(addedpigSkill), breed: String(addedpigBreed), personality: String(addedpersonailty) };
                gpig.add(newgPig);
                gstore();
                location.reload();
            }
            else {
                alert("Please enter a value under 100! Your pig is not a speed boat!");
            }
        }
    });
    addCategorySel.onchange = function () {
        var _a, _b, _c;
        var pigImg = document.getElementById("selectpigimg");
        var nameImge = document.getElementById("imgname");
        var Weight = document.getElementById("wVal");
        var Height = document.getElementById("hVal");
        var addedpigName = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
        var addedpigHeight = (_b = document.getElementById("height")) === null || _b === void 0 ? void 0 : _b.value;
        var addedpigWeight = (_c = document.getElementById("weight")) === null || _c === void 0 ? void 0 : _c.value;
        if (addBreedSel.options.length > 0) {
            for (var i = addBreedSel.options.length; i > 0; i--) {
                addBreedSel.remove(i);
            }
        }
        if (addCategorySel.options[addCategorySel.selectedIndex].text == "Black") {
            for (var i = 0; i < BlackBreedArray.length; i++) {
                addBreedSel.options[addBreedSel.options.length] = new Option(BlackBreedArray[i], BlackBreedArray[i]);
                skillName.innerText = "Strength";
                skillVal.placeholder = "Please enter 1 to 10";
                skillVal.min = "1";
                skillVal.max = "10";
                pigImg.src = "bpigimg.jpeg";
                nameImge.innerText = String(addedpigName);
                Weight.innerHTML = String(addedpigWeight);
                Height.innerHTML = String(addedpigHeight);
                nameImge.style.color = "white";
                nameImge.style.display = "block";
                Weight.style.display = "block";
                Height.style.display = "block";
            }
        }
        else if (addCategorySel.options[addCategorySel.selectedIndex].text == "White") {
            for (var i = 0; i < WhiteBreedArray.length; i++) {
                addBreedSel.options[addBreedSel.options.length] = new Option(WhiteBreedArray[i], WhiteBreedArray[i]);
                skillName.innerText = "Running";
                skillVal.placeholder = "Please enter 0 to 100";
                skillVal.min = "0";
                skillVal.max = "100";
                pigImg.src = "wpigimg.jpeg";
                nameImge.innerText = String(addedpigName);
                Weight.innerHTML = String(addedpigWeight);
                Height.innerHTML = String(addedpigHeight);
                nameImge.style.color = "black";
                nameImge.style.display = "block";
                Weight.style.display = "block";
                Height.style.display = "block";
            }
        }
        else if (addCategorySel.options[addCategorySel.selectedIndex].text == "Grey") {
            for (var i = 0; i < GreyBreedArray.length; i++) {
                addBreedSel.options[addBreedSel.options.length] = new Option(GreyBreedArray[i], GreyBreedArray[i]);
                skillName.innerText = "Swimming";
                skillVal.placeholder = "Please enter 0 to 100";
                skillVal.min = "0";
                skillVal.max = "100";
                pigImg.src = "gpigimg.jpeg";
                nameImge.innerText = String(addedpigName);
                Weight.innerHTML = String(addedpigWeight);
                Height.innerHTML = String(addedpigHeight);
                nameImge.style.color = "black";
                nameImge.style.display = "block";
                Weight.style.display = "block";
                Height.style.display = "block";
            }
        }
        else if (addCategorySel.options[addCategorySel.selectedIndex].text == "Chestnut") {
            for (var i = 0; i < ChestnutBreedArray.length; i++) {
                addBreedSel.options[addBreedSel.options.length] = new Option(ChestnutBreedArray[i], ChestnutBreedArray[i]);
                skillName.innerText = "Language";
                skillVal.type = "text";
                skillVal.placeholder = "Please enter a language";
                pigImg.src = "cpigimg.jpeg";
                nameImge.innerText = String(addedpigName);
                Weight.innerHTML = String(addedpigWeight);
                Height.innerHTML = String(addedpigHeight);
                nameImge.style.color = "black";
                nameImge.style.display = "block";
                Weight.style.display = "block";
                Height.style.display = "block";
            }
        }
    };
};
