var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    for (var i=0;i<res.length;i++) {
         console.log(res[i].flag);
        console.log(`NAME:${res[i].name} REGION:${res[i].region} SUB-REGION:${res[i].subregion} POPULATION:${res[i].population}`);
    }
}
// --------------------------------------
// compare two JSON properties:-

var obj1 = {name:"person1",age:5};
var obj2 = {name:"person1",age:5};

var res = JSON.stringify(obj1);
var res1 = JSON.stringify(obj2);

if(res===res1){
    console.log("JSON have same properties");
} else {
    console.log("JSON have different properties");
}