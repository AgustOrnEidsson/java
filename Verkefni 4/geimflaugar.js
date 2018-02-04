function geimflaugar(name,life){
	this.name="SpaceRacer"
	this.life=10
	this.showName=function(){
		console.log(this.name)
	}
};

var geimflaug1 = new geimflaugar;
var geimflaug2 = new geimflaugar;
var geimflaug3 = new geimflaugar;

geimflaug1.name="Geimflaug 1";
geimflaug1.showName()

listi=[geimflaug1,geimflaug2,geimflaug3]

for (var geimflaug in listi) {
  listi[geimflaug].speed=5
}

geimflaugar.prototype.fly=function(){
		this.speed++
	};

var geimflaug4 = new geimflaugar;

geimflaug4.speed=5

geimflaug4.damage=function(){
	this.life--
	}