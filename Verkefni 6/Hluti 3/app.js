var main = document.createElement("div"); 
main.setAttribute("id","quiz")

var div = document.createElement("div");
main.appendChild(div);  
div.setAttribute("id","question")
document.body.appendChild(main); 

var spurn = document.createTextNode("Spurning 1"); 
div.appendChild(spurn);

var svor = document.createElement("div"); 
svor.setAttribute("id","answers") 
main.appendChild(svor); 

var svar1 = document.createElement("div"); 
svar1.setAttribute("class","answer","data-active","answer") 
svar1.appendChild(document.createTextNode("Svarmöguleiki 1")); 
svor.appendChild(svar1); 

var svar2 = document.createElement("div"); 
svar2.setAttribute("class","answer","data-active","answer") 
svar2.appendChild(document.createTextNode("Svarmöguleiki 2")); 
svor.appendChild(svar2);