var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));

for(i=0;i<25;i++){
    picture=document.write("<p>"+JSON.stringify(data.results[i].picture.large)+"</p>")
    document.getElementsByTagName("td").innerHTML=picture

}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}