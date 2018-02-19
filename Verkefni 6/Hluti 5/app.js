function quiz(spurn,svar,annad){
	this.spurn=spurn
	this.svar=svar
	this.annad=annad
};
var spurn1 = new quiz("Hvaða drykkur kemur beint úr beljum?","Mjólk",["Kaffi","Kristall Plús","Mjólk","Ananas safi"]);
var spurn2 = new quiz("Fer ananas á pizzu?","True",["False","True"]); 

list=[spurn1,spurn2]

teljari=-1
for(x in list){
	teljari++
}

tala=Math.round(Math.random());

spur=list[tala]

function uppl(spurnin,svarid,anna){
	document.getElementById("quiz").innerHTML +='<div style="color:blue;" >'+spurnin+"</div>"+"<br>";
	strengur='<div id="svorin">'
	for (x in anna) {
		 strengur=strengur+'<div id="svar">'+ anna[x]+"</div>"
	}
	document.getElementById("quiz").innerHTML +=strengur
};

uppl(spur.spurn,spur.svar,spur.annad)

var ans = document.getElementById("svorin");

for (x in ans) 
ans.onclick = function(){
    if (ans==ans){
        ans.style.color = "lime";
        if (tala==teljari){//lætur þig byrja á fyrstu spurningunni ef þú varst á seinustu
        	tala=0
        }
        else{//annars ferðu á næstu
        	tala++
        }
        q=document.getElementById("svorin");
        a=document.getElementById("svar");
        delete q
        delete a
        spur=list[tala]//vel nýju spurninguna
        uppl(spur.spurn,spur.svar,spur.annad)//og birti hana
    }
    else{
    	ans.style.color="red";
    }
}