// Creating and setting the sprites to the desired spot of the screen
var alien = createSprite(50, 22);
var ufo = createSprite(370, 330);
// Setting both the alien and the ufo to the screen and to the right size
alien.setAnimation("alien");
ufo.setAnimation("ufo");
alien.scale = 0.09;
ufo.scale = 0.15;

function draw() {
background("lightblue");

// When the alien collides with the ufo the game will end,
// and a message will be displayed
if(alien.collide(ufo)) {
textSize(25);
stroke("green");
text("YOU DID IT!!", 254, 300); 
}

// This is to make the maze in the background
var wall1 = createSprite(10, 50, 100, 15);
wall1.shapeColor = "black";
var wall2 = createSprite(52, 90, 15, 63);
wall2.shapeColor = "black"; 
var wall3 = createSprite(80, 90, 50, 15);
wall3.shapeColor = "black";
var wall4 = createSprite(27, 90, 50, 15);
wall4.shapeColor = "black";
var wall5 = createSprite(150, 150, 15, 60);
wall5.shapeColor = "black";
var wall6 = createSprite (182, 128, 50, 15);
wall6.shapeColor = "black";
var wall7 = createSprite (180, 172, 50, 15);
wall7.shapeColor = "black";
var wall8 = createSprite (15, 172, 50, 15);
wall8.shapeColor = "black";
var wall9 = createSprite(40, 195, 15, 60);
wall9.shapeColor = "black";
var wall10 = createSprite(100, 10, 15, 60);
wall10.shapeColor = "black";
var wall11 = createSprite(131, 32, 50, 15);
wall11.shapeColor = "black";
var wall12 = createSprite(148, 60, 15, 40);
wall12.shapeColor = "black";
var wall13 = createSprite(70, 218, 50, 15);
wall13.shapeColor = "black";
var wall14 = createSprite(180, 72, 50, 15);
wall14.shapeColor = "black";
var wall15 = createSprite(130, 160, 50, 15);
wall15.shapeColor = "black";
var wall16 = createSprite(150, 190, 15, 40);
wall16.shapeColor = "black";
var wall17 = createSprite(198, 50, 15, 50);
wall17.shapeColor = "black";
var wall18 = createSprite(221, 30, 58, 15);
wall18.shapeColor = "black";
var wall19 = createSprite(250, 17, 15, 42);
wall19.shapeColor ="black";
var wall20 = createSprite(87, 240, 15, 40);
wall20.shapeColor = "black";
var wall21 = createSprite(70, 260, 50, 15);
wall21.shapeColor = "black";
var wall22 = createSprite(40, 273, 15, 40);
wall22.shapeColor = "black";
var wall23 = createSprite(22, 300, 50, 15);
wall23.shapeColor = "black";
var wall24 = createSprite(347, 270, 100, 15);
wall24.shapeColor = "black";
var wall25 = createSprite(300, 247, 15, 60);
wall25.shapeColor = "black";
var wall26 = createSprite(273, 220, 70, 15);
wall26.shapeColor = "black";
var wall27 = createSprite(260, 195, 15, 40);
wall27.shapeColor = "black";
var wall28 = createSprite(180, 200, 15, 50);
wall28.shapeColor = "black"; 
var wall29 = createSprite(300, 115, 15, 50);
wall29.shapeColor = "black";
var wall30 = createSprite(300, 90, 90, 15);
wall30.shapeColor = "black"; 
var wall31 = createSprite(220, 220, 95, 15);
wall31.shapeColor = "black";
var wall32 = createSprite(300, 60, 15, 50);
wall32.shapeColor = "black";
var wall33 = createSprite(135, 330, 100, 15);
wall33.shapeColor = "black"; 
var wall34 = createSprite(135, 290, 15, 70);
wall34.shapeColor = "black"; 
var wall35 = createSprite(230, 265, 70, 15);
wall35.shapeColor = "black";
var wall36 = createSprite(230, 298, 15, 70);
wall36.shapeColor = "black"; 
var wall37 = createSprite(217, 396, 15, 50);
wall37.shapeColor = "black"; 
var wall38 = createSprite(190, 378, 50, 15);
wall38.shapeColor = "black"; 
var wall39 = createSprite(160, 386, 15, 30);
wall39.shapeColor = "black"; 
var wall40 = createSprite(370, 166, 90, 15);
wall40.shapeColor = "black";


// These are the conditionals so that when the user presses the up, down,
// left, or right arrow the alien moves in those directions
if (keyDown("right")) {
  alien.velocityX = 10;
  alien.velocityY = 0;
}

if (keyDown("left")) {
  alien.velocityX = -10;
  alien.velocityY = 0;
}

if (keyDown("up")) {
  alien.velocityX = 0;
  alien.velocityY = -10;
}

if(keyDown("down")) {
  alien.velocityX = 0;
  alien.velocityY = 10;
}

// This is so that if the alien hits anypart of the maze walls it bounces 
// off instead of passing through the walls 
alien.bounceOff(wall1);
alien.bounceOff(wall2);
alien.bounceOff(wall3);
alien.bounceOff(wall4);
alien.bounceOff(wall5);
alien.bounceOff(wall6);
alien.bounceOff(wall7);
alien.bounceOff(wall8);
alien.bounceOff(wall9);
alien.bounceOff(wall10);
alien.bounceOff(wall11);
alien.bounceOff(wall12);
alien.bounceOff(wall13);
alien.bounceOff(wall14);
alien.bounceOff(wall15);
alien.bounceOff(wall16);
alien.bounceOff(wall17);
alien.bounceOff(wall18);
alien.bounceOff(wall19);
alien.bounceOff(wall20);
alien.bounceOff(wall21);
alien.bounceOff(wall22);
alien.bounceOff(wall23);
alien.bounceOff(wall24);
alien.bounceOff(wall25);
alien.bounceOff(wall26);
alien.bounceOff(wall27);
alien.bounceOff(wall28);
alien.bounceOff(wall29);
alien.bounceOff(wall30);
alien.bounceOff(wall31);
alien.bounceOff(wall32);
alien.bounceOff(wall33);
alien.bounceOff(wall34);
alien.bounceOff(wall35);
alien.bounceOff(wall36);
alien.bounceOff(wall37);
alien.bounceOff(wall38);
alien.bounceOff(wall39);
alien.bounceOff(wall40);
// Instead of the alien bouncing off the ufo it will collide and stay
// there and then the game will end
alien.collide(ufo);
// This is so that when the alien hits the edge of the screen it doesn't 
// disappear off the screen but bounces off
createEdgeSprites();
alien.bounceOff(edges);
  drawSprites();
}
