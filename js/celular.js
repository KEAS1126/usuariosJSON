var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));

for(i=0;i<25;i++){
    cell=document.write("<p>"+data.results[i].cell+"</p>")
    document.getElementsByTagName("td").innerHTML=cell
}


function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}

