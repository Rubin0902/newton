const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,platform;
var bird, slingshot,ball;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(200,200,25);
	ball2 = new Ball(250,200,25);
	ball3 = new Ball(300,200,25);
	ball4 = new Ball(350,200,25);
	ball5 = new Ball(400,200,25);
	ball6 = new Ball(450,200,25);
	slingshot1 = new SlingShot(ball1.body,{x:200, y:50});
	slingshot2 = new SlingShot(ball2.body,{x:245, y:50});
	slingshot3 = new SlingShot(ball3.body,{x:290, y:50});
	slingshot4 = new SlingShot(ball4.body,{x:335, y:50});
	slingshot5 = new SlingShot(ball5.body,{x:380, y:50});
	slingshot6 = new SlingShot(ball6.body,{x:425, y:50});
}

function draw(){
    background("");
    rect(150,50,330,25);
    Engine.update(engine);
    strokeWeight(4);

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();
	slingshot1.display();    
	slingshot2.display();   
	slingshot3.display();   
	slingshot4.display();   
	slingshot5.display();   
	slingshot6.display();   
}
function keyPressed(){
    if(keyCode === 32){
		ball1.body.force.x -= 0.1;
		ball1.body.force.y -= 0.1;
    }
}
