var paper,floor,bin,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bin = createSprite(580,610,20,120);
	bin.shapeColor = "green";

	bin2 = createSprite(750,610,20,120);
	bin2.shapeColor = "grey";

	bin3 = createSprite(665,660,150,20);
	bin3.shapeColor = "blue";



	floor = createSprite(140,700,1200,20);
	floor.shapeColor = "brown";

	paper = createSprite(40,680,40,40);
	paper.shapeColor = "red";



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



