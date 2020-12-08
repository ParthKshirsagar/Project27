
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var pillar;
var ball1, ball2, ball3, ball4, ball5;
var constraint1, constraint2, constraint3, constraint4,constraint5;

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	pillar = new Pillar(400, 100, 250, 35);

	ball1 = new Ball(300, 300, 25);
	ball2 = new Ball(350, 300, 25);
	ball3 = new Ball(400, 300, 25);
	ball4 = new Ball(450, 300, 25);
	ball5 = new Ball(500, 300, 25);

	ball2.body.isStatic = false;

	constraint1 = new chain(ball1.body, {x:300, y:100});
	constraint2 = new chain(ball2.body, {x:350, y:100});
	constraint3 = new chain(ball3.body, {x:400, y:100});
	constraint4 = new chain(ball4.body, {x:450, y:100});
	constraint5 = new chain(ball5.body, {x:500, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175);

  constraint1.display(); 
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

  pillar.display();
 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  startCradle();

  
  
  drawSprites();
 
}

function startCradle(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-30, y:-0});
	}
}



