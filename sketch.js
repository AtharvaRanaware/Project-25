
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper,dustbin;

var wall1,wall2,wall3;


function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground= new Ground (300,590,1000,20)

	wall1=createSprite(390,480,20,200)
	
	
	wall2=createSprite(500,570,200,20)
	
	
	wall3=createSprite(590,480,20,200)
	

	paper=new Paper(10,500,50,50);

	dustbin= new Dustbin (490,480,200,200)

	
	
	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background('yellow');

 
	paper.display();
	ground.display();
	dustbin.display();
	
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130})

	 }
   }


