
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob();
	bobObject2 = new Bob();
	bobObject3 = new Bob();
	bobObject4 = new Bob();
	bobObject5 = new Bob();
	chain1 = new Rope();
	chain2 = new Rope();
	chain3 = new Rope();
	chain4 = new Rope();
	chain5 = new Rope();
	roof = new Roof(width/2,100,400,25);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	roof.display();

	Engine.update(engine);

	drawSprites();

}



