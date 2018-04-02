//Ágúst Örn Eiðsson
//Leikur Javascript 20%

var canvas = document.getElementById('main');//sæki canvasinn main
var ctx = canvas.getContext('2d');


var keysDown = {};//bý til object sem geymir hvort það sé verið að ýta á takka

  addEventListener("keydown", function (e) {//bý til eventlistener sem finnur hvaða takki er niðri
    keysDown[e.keyCode] = true;//og bæti takka keycodeinu í keysdown
  }, false);

  addEventListener("keyup", function (e) {//ef það er sleppt takkanum
    delete keysDown[e.keyCode];//þá er takkanum eytt úr keysdown
  }, false);

var menu=function () {//bý til menuið
  ctx.font="50px Impact";//vel font
  ctx.fillStyle="#9b42f4";//og lit á texta
  ctx.textAlign="center";//passa að textinn sé í miðjunni
  ctx.fillText("Ævintýri Jónatans",canvas.width/2,canvas.height/2-40);//skrifa textan sem ég vil að birtist og set hann fyrir miðju
  ctx.font="25px Arial";//breyti um font
  ctx.fillText("Ýttu á 'space' til að halda áfram",canvas.width/2,canvas.height/2+10)//annar texti sem verður fyrir neðan þann fyrri
  ctx.fillStyle="#722a12";//breyti um lit
  ctx.fillText("Örvatakkar til að hreyfa",canvas.width/2,canvas.height/2+60)
  ctx.fillText("'space' til að interacta",canvas.width/2,canvas.height/2+90)
  if (32 in keysDown) {//býð þangað til að það sé ýtt á 'space'
    game();//ef það er ýtt á space þá fer það í leikinn
  }
  else{
    requestAnimationFrame(menu);//annars gerist ekkert
  }
};

var game=function(){//hérna byrjar leikurinn
  //hver tala er númer á tile á myndii image.png
  var ground = [//basic foundation fyrir kortið
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

   var layer1 = [//annar layer sem gerir kortið fallegra
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


  var tilesetImage = new Image();//geri var sem geymir mynd
  tilesetImage.src = 'view/image.png';//sæki myndina
  tilesetImage.onload = drawImage;//teiknar myndina þegar það er loadað
  var tileSize = 32;//hver tile er 32 pixlar
  var rowTileCount = 20;//það eru 20 tiles á hlið á sjálfri myndinni
  var colTileCount = 32;//og 32 niður
  var imageNumTiles = 16;
  function drawImage () {//byrja að teikna myndina
     for (var r = 0; r < rowTileCount; r++) {//fer tile fyrir tile til hliðar
     for (var c = 0; c < colTileCount; c++) {//fer tile fyrir tile niður
        var tile = ground[ r ][ c ];//sækir tölu ú ground
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

  var wizred = false;//bý til wizred sem er false
  var wizimg = new Image();
  wizimg.onload = function () {//þegar myninni er loadað þá 
    wizred = true;//segi ég að myndin sé ready
  };
  wizimg.src = "view/wizard.png";//sæki myndina


  var jonatanReady = false;
  var jonatanImage = new Image();
  jonatanImage.onload = function () {
    jonatanReady = true;
  };
  jonatanImage.src = "view/hero.png";

  var jonatan = {//bý til objectið jonatan
    speed: 200//sem er með hraðann 200
  };

  var wiz = {};//bý til objectið wiz

  var keysDown = {};

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

  jonatan.x=520;//vel byrjunar stöðu
  jonatan.y=340;

  mission="down"//segi til um stöðu missionsins
  var update = function (modifier) {
    if (38 in keysDown) {
      jonatan.y -= jonatan.speed * modifier;//ef ýtt er upp
    }
    if (40 in keysDown) {
      jonatan.y += jonatan.speed * modifier;//ef ýtt er niður
    }
    if (37 in keysDown) {
      jonatan.x -= jonatan.speed * modifier;//eft ýtt er til vinstri
    }
    if (39 in keysDown) {
      jonatan.x += jonatan.speed * modifier;//ef ýtt er til hægri
    }
    //set upp border svo playerinn seti ekki farið út af kortinu
    if (jonatan.y<=30) {
      jonatan.y=31
    }
    if (jonatan.y>=580) {
      jonatan.y=579
    }
    if (jonatan.x<=30) {
      jonatan.x=31
    }
    if (jonatan.x>=960) {
      jonatan.x=959
    }

    if(217<jonatan.y && jonatan.y<300){//passa að playerinn sé nálægt wizardnum til að geta tekið við missioninu
      if (796<jonatan.x && jonatan.x<895) {
        if (32 in keysDown) {
          mission="in-progress"//segi til um að mission sé í progress
        }
      }
    }
    if (mission=="in-progress"){

    }
  };

  var render = function () {//þetta fall renderar inn myndunum
    if (wizred) {
      ctx.drawImage(wizimg, 835, 220,50,50);
    }

    if (jonatanReady) {
        ctx.drawImage(jonatanImage, jonatan.x, jonatan.y);
      }
  };

  var main = function () {//þetta er límið, þetta er fallið sem tengir allt saman
    drawImage();//kallar í drawImage
    var now = Date.now();//finn tíma núna
    var delta = now - then;

    update(delta / 1000);//kalla í update
    render();

    then = now;

    requestAnimationFrame(main);//keyri aftur
  };

  var w = window;

  var then = Date.now();
  w.requestAnimationFrame(main)
};

var w = window;

var then = Date.now();
w.requestAnimationFrame(menu)