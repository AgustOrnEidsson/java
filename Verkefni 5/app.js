function quiz(spurn,svar,annad){
	this.spurn=spurn
	this.svar=svar
	this.annad=annad
};
var spurn1 = new quiz("Hvaða drykkur kemur beint úr beljum?","Mjólk",["Kaffi","Kristall Plús","Mjólk","Ananas safi"]);
var spurn2 = new quiz("Fer ananas á pizzu?","True",["False","True"]);
var spurn3= new quiz("Er pylsa samloka?","True",["True","False"])

list=[spurn1,spurn2]

tala=Math.round(Math.random());

spur=list[tala]

function uppl(spurnin,svarid,anna){
	document.getElementById("quiz").innerHTML +='<div style="color:blue;">'+spurnin+"</div>"+"<br>";
	for (x in anna) {
		if (anna[x]==svarid) {
    		document.getElementById("quiz").innerHTML += '<div style="color:lime;">'+ anna[x]+"</div>";
		}
		else{
			document.getElementById("quiz").innerHTML += '<div style="color:red;">'+ anna[x]+"</div>";
		}
	}
};

uppl(spur.spurn,spur.svar,spur.annad)