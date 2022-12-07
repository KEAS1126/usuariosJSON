var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));

for(i=0;i<25;i++){
    login=document.write("<p>"+data.results[i].login.password+"</p>")
    document.getElementsByTagName("td").innerHTML=login
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}