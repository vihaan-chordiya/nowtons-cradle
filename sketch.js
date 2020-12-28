var ball1, ball2, ball3, ball4, ball5;
var rod1, rod2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(250,500,20);
	ball2 = new Ball(350,500,20);
	ball3 = new Ball(450,500,20);
	ball4 = new Ball(550,500,20);
	ball5 = new Ball(650,500,20);
	rod1 = new Rod(400,670,800,20);
  rod2 = new Rod(400,100,800,20);
  string = new String(ball1.body,{x:200,y:100});
  string1 = new String(ball2.body,{x:250,y:100});
  string2 = new String(ball3.body,{x:300,y:100});
  string3 = new String(ball4.body,{x:350,y:100});
  string4 = new String(ball5.body,{x:400,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rod1.display();
  rod2.display();
  string.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();

  drawSprites();
 
}

function mouseDragged(){
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});    

}

