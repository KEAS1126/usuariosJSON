var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));

for(i=0;i<25;i++){
    city=document.write("<p>"+data.results[i].location.city+"</p>")
    document.getElementsByTagName("td").innerHTML=city
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}