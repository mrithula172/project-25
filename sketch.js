var paper, ground, side1, side2, side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper = new Paper();
	ground = new Ground();

	//fix the container
	fill("white")
	side1 = new Trash(340,610,20,150);
	side2 = new Trash(485,610,20,150);
      dustbin=new Dustbin(400,550,10,10)
	//fix side 3
	//side3 = new Trash(750, 590, 10,100);
  
	
}

	function draw() {

  rectMode(CENTER);

  background(255);
  
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  dustbin.display();
  //side3.display();  
  drawSprites();

}

function keyPressed() {
	if (keyCode ===UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
  
	}
}

