
var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));
for(i=0;i<25;i++){
    nombre=document.write("<p>"+data.results[i].name.first+"</p>")

    document.getElementsByTagName("td").innerHTML=nombre

}

document.write(data.results[2].name.first)

console.log(data.results[2].name.first)
console.log(data.results[2].login.password)

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}