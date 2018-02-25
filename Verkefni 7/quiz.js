function quiz(spurning,svarmoguleikar,rettsvar){
	this.spurning=spurning
	this.svarmoguleikar=svarmoguleikar
	this.rettsvar=rettsvar
};

let quiz1 = new quiz("Hvaða drykkur kemur beint úr beljum?",["Kaffi","Kristall Plús","Mjólk","Ananas safi"],"Mjólk");
let quiz2 = new quiz("Fer ananas á pizzu?",["False","True"],"True"); 
listi=[quiz1,quiz2]
tala=Math.round(Math.random())
function adderino(spurning,svarmoguleikar,rettsvar){
		svarStrengur='<ul id="parent-list">'
		spurningaStrengur="<div>"+spurning+"</div>"
		for (x in svarmoguleikar){
			svarStrengur+="<li>"+svarmoguleikar[x]+"</li>";
		}
		spurningaStrengur+="</ul>"
		strengur=spurningaStrengur+svarStrengur
		document.getElementById("quiz").innerHTML+=strengur	
};
function checkAnswer(){
	let targetElement = event.target || event.srcElement;
    for(x = 0; x < listi.length; x++){
    	if (targetElement.textContent == listi[x].rettsvar){
    		adderino(listi[1].spurning,listi[1].svarmoguleikar,listi[1].rettsvar);
    		let drasl=document.getElementById("quiz").children
    		drasl[1].remove()
    		drasl[0].remove()

    	}
    	else{
    	targetElement.style.color="red";
    }
    }
    
};
for(x = 0; x < listi.length; x++){
	adderino(listi[x].spurning,listi[x].svarmoguleikar,listi[x].rettsvar);
	let spurningin = document.getElementById("quiz").children
	let svarmoguleikarnir = spurningin[1].children
	let i;
	let texti = ""
	for (i = 0; i < svarmoguleikarnir.length; i++) {
	    svarmoguleikarnir[i].addEventListener("click", checkAnswer, false);
	    }
	console.log("nein")
	}