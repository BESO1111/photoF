var x=["features","pricing","community","support"]

var z=['index.html',"pricing.html","community.html","support.html"]

var ul="<ul>"

for(i=0; i<x.length ; i++){

ul+='<li><a href="'+z[i]+'" >'+x[i]+"</a></li>"



}

ul+="</ul>";

document.getElementById("nav").innerHTML=ul