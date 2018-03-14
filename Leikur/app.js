function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
 
var level = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,1,1,1,1,1],
    [1,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,1,4,2,1,3,0,1],
    [1,0,0,0,1,0,0,1],
    [1,0,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1]
];
 
var vegur = 0;
var veggur = 1;
var annad = 2;
var kassi = 3;
var p1 = 4;

class Level {
  constructor(plan) {
    let rows = plan.trim().split("\n").map(l => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if (typeof type == "string") return type;
        this.startActors.push(
          type.create(new Vec(x, y), ch));
        return "empty";
      });
    });
  }
}