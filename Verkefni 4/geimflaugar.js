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
console.log(geimflaug1)

for (var geimflaug in geimflaugar) {
  geimflaugar[geimflaug].speed;
}

geimflaugar.prototype.fly=function(){
		this.speed++
	};