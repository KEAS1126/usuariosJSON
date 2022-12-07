var data = JSON.parse(httpGet('https://randomuser.me/api/?results=250'));

for(i=0;i<25;i++){
    
    caracteres=JSON.stringify(data.results[i].login.password.length)
    if(caracteres<=4){
        login=document.write("<p style='color:red'>"+JSON.stringify(data.results[i].login.password)+"</p>")
    }
    else{
        login=document.write("<p style='color:green'>"+JSON.stringify(data.results[i].login.password)+"</p>")
    }
    console.log(caracteres)
    document.getElementsByTagName("td").innerHTML=login
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );
    return xmlHttp.responseText;
}