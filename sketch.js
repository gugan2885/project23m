const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase,player;
var computerBase,computer;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
   180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
   
  engine = Engine.create();
  world = engine.world;
	
   


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   player.display();

   //display Player and computerplayer
   computerBase.display();
  computer.display();

}
