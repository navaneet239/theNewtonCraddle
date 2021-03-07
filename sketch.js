
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5; 

var roof;
var roofHold, roofHold2, roofHold3, roofHold4, roofHold5;

var chain1, chain2 ,chain3, chain4, chain5;

var rope;

var box;

function preload()
{

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	//initializing the engine and the world
	engine 		= Engine.create();
	world 		= engine.world;

	//Create the Bodies Here.
	bob1 		= new Bob(150, 400, 100);
	bob2 		= new Bob(250, 400, 100);
	bob3 		= new Bob(350, 400, 100);
	bob4 		= new Bob(450, 400, 100);
	bob5 		= new Bob(550, 400, 100);



	roof 		= new Roof(100, 100, 600, 50);
	roofHold 	= new Roof(200, 150, 10, 5);
	roofHold2 	= new Roof(300, 150, 10, 5);
	roofHold3 	= new Roof(400, 150, 10, 5);
	roofHold4 	= new Roof(500, 150, 10, 5);
	roofHold5 	= new Roof(600, 150, 10, 5);


	chain1 		= new Rope(bob1.body, roofHold.body);
	chain2 		= new Rope(bob2.body, roofHold2.body);
	chain3 		= new Rope(bob3.body, roofHold3.body);
	chain4 		= new Rope(bob4.body, roofHold4.body);
	chain5 		= new Rope(bob5.body, roofHold5.body);

	box 		= createSprite(width - 300, height/2 + 5, 300, 100,)
	box.shapeColor = "Green"

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("lightBlue");


  if(keyDown(UP_ARROW)){
	  //bob1
  }
  
  drawSprites();

  text("Newton's", width - 400, height/2 - 35, fill("black"), textSize(35))
  text("Craddle", width - 375, height/2, fill("black"), textSize(55))

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

 
}



