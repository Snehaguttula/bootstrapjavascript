function loadjson(file,callback){
    var xhr= new XMLHttpRequest();
    xhr.overrideMimeType("appliccation/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile);
})

function display(cse){
    for(var k=1;k<cse.length;k++){
   //card area
var rdata=document.querySelector(".row")
console.log(cse)

//card

var cad=document.createElement("div")
    cad.classList.add("card")
    rdata.appendChild(cad)

//image area

var pic=document.createElement("img")
pic.src=cse[k].img
cad.appendChild(pic)


var sname=document.createElement("h1")
sname.textContent=cse[k].name;
cad.appendChild(sname)

}

}


//card area
var rdata=document.querySelector(".row")
console.log(rdata)

//card

var cad=document.createElement("div")
    cad.classList.add("card")
console.log(cad)

//image area

var pic=document.createElement("img")
console.log(pic)

var sname=document.createElement("h1")
console.log(sname)

