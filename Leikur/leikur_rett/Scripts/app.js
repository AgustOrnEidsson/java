var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');


var keysDown = {};

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

var menu=function () {
  ctx.font="50px Impact";
  ctx.fillStyle="#9b42f4";
  ctx.textAlign="center";
  ctx.fillText("Kallinn",canvas.width/2,canvas.height/2-30);
  ctx.font="20px Arial";
  ctx.fillText("Ýttu á 'space' til að halda áfram",canvas.width/2,canvas.height/2+50)
  if (32 in keysDown) {
    game();
  }
  else{
    requestAnimationFrame(menu);
  }
};

var game=function(){
  console.log("ok, ok")
  var ground = [
   [14, 15, 14, 15, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 14, 15, 14, 15, 14, 15, 14, 15, 55, 55, 55],
   [30, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
   [14, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
   [30, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
   [14, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
   [30, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
   [14, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 31],
   [30, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 15],
   [14, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 31],
   [30, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 15],
   [14, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 31],
   [30, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 15],
   [14, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 31],
   [30, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 15],
   [14, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 31],
   [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 15],
   [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 31],
   [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 15],
   [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 31],
   [34, 34, 34, 34, 34, 34, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15]
   ];

   var layer1 = [
   [0, 0, 32, 33, 0, 236, 0, 0, 236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 32, 33],
   [0, 0, 48, 49, 0, 236, 220, 220, 236, 0, 0, 147, 72, 73, 70, 71, 72, 73, 83, 83, 84, 85, 0, 0, 0, 0, 0, 48, 49],
   [0, 0, 64, 65, 54, 0, 236, 236, 0, 0, 162, 163, 84, 89, 86, 87, 88, 89, 99, 99, 100, 101, 0, 0, 0, 0, 7, 112, 113],
   [0, 0, 80, 81, 70, 54, 55, 50, 0, 0, 0, 179, 100, 105, 102, 103, 104, 105, 0, 0, 0, 0, 0, 0, 16, 22, 23, 39],
   [0, 0, 96, 97, 86, 70, 65, 144, 193, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49],
   [0, 0, 0, 0, 102, 86, 81, 160, 161, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 65, 174, 175, 67, 66, 54],
   [0, 0, 0, 0, 0, 102, 97, 176, 177, 0, 0, 37, 0, 252, 0, 0, 0, 0, 0, 0, 0, 151, 0, 0, 80, 81, 190, 191, 83, 82, 70, 71],
   [0, 0, 118, 119, 0, 0, 0, 48, 49, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 222, 223, 99, 98, 86, 87],
   [0, 0, 134, 135, 0, 0, 0, 64, 65, 66, 68, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 239, 0, 0, 238, 239, 102, 103],
   [0, 0, 0, 0, 0, 0, 0, 80, 81, 82, 84, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 255, 0, 0, 254, 255],
   [0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 100, 101, 0, 0, 0, 0, 0, 116, 117],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 133, 0, 0, 237, 0, 0, 238, 239, 0, 0, 238, 239],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 0, 0, 0, 0, 0, 0, 0, 0, 253, 0, 0, 254, 255, 0, 0, 254, 255],
   [0, 0, 0, 0, 0, 0, 0, 0, 0],
   [2, 3, 4, 0, 0, 0, 0, 0, 0],
   [18, 19, 20, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 35, 40, 24, 25, 8, 9, 0, 0, 118, 119, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 40, 41, 20, 8, 9, 0, 134, 135, 0, 0, 0, 0, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 40, 19, 24, 25, 8, 9, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 115, 3, 4, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 40, 41, 20, 21, 0, 0, 0, 0, 0, 64, 65, 66, 67, 52, 19, 19, 20, 21]
   ];


  var tilesetImage = new Image();
  tilesetImage.src = 'view/image.png';
  tilesetImage.onload = drawImage;
  var tileSize = 32;
  var rowTileCount = 20;
  var colTileCount = 32;
  var imageNumTiles = 16;
  function drawImage () {
     for (var r = 0; r < rowTileCount; r++) {
     for (var c = 0; c < colTileCount; c++) {
        var tile = ground[ r ][ c ];
        var tileRow = (tile / imageNumTiles) | 0;
        var tileCol = (tile % imageNumTiles) | 0;
        ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        tile = layer1[ r ][ c ];
        tileRow = (tile / imageNumTiles) | 0;
        tileCol = (tile % imageNumTiles) | 0;
        ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
      }
      }
    }

  var wizred = false;
  var wizimg = new Image();
  wizimg.onload = function () {
    wizred = true;
  };
  wizimg.src = "view/wizard.png";


  var heroReady = false;
  var heroImage = new Image();
  heroImage.onload = function () {
    heroReady = true;
  };
  heroImage.src = "view/hero.png";

  var hero = {
    speed: 200
  };

  var wiz = {};

  var keysDown = {};

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

  hero.x=520;
  hero.y=340;
  wiz.x=835
  wiz.y=220

  var reset = function () {
    hero.x = hero.x;
    hero.y = hero.y;
  };
  mission="down"
  var update = function (modifier) {
    if (38 in keysDown) {
      hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) {
      hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) {
      hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) {
      hero.x += hero.speed * modifier;
    }
    if (hero.y<=30) {
      hero.y=31
    }
    if (hero.y>=580) {
      hero.y=579
    }
    if (hero.x<=30) {
      hero.x=31
    }
    if (hero.x>=960) {
      hero.x=959
    }

    if(217<hero.y && hero.y<300){
      if (796<hero.x && hero.x<895) {
        if (32 in keysDown) {
          mission="in-progress"
          console.log(mission)
        }
      }
    }
    if (mission=="in-progress"){

    }
  };


  var render = function () {
    if (wizred) {
      ctx.drawImage(wizimg, wiz.x, wiz.y,50,50);
    }


  if (heroReady) {
      ctx.drawImage(heroImage, hero.x, hero.y);
    }
  };

  var main = function () {
    drawImage();
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    requestAnimationFrame(main);
  };

  var w = window;

  var then = Date.now();
  reset();
  w.requestAnimationFrame(main)
};

var w = window;

var then = Date.now();
w.requestAnimationFrame(menu)