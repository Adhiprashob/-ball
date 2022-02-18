
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftSide;
var rightSide
var ball;


function setup() {
	createCanvas(1500,700);



  
	
	
	

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine)


	//Create the Bodies Here.

	//ground =new Ground(width/2,670,width,20);
	ground =new Ground(width/2,570,width,20)

	leftSide =new Ground(1300,500,20,120);
	//rightSide =new Ground(1100,500,20,120);
      rightSide =new Ground(1460,500,20,120)
	


	var ball_options ={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2,
	

	}

	ball = Bodies.circle(200,30,15,ball_options);
	World.add(world,ball);
    fill("white")



rectMode(CENTER);
  ellipseMode(RADIUS);


}


function draw() {
  background("black");
  Engine.update(engine);
  ground.show();
  leftSide.show();
  rightSide.show();

  if(keyDown("up_arrow")){
    vForce();
    
  }

  

  

ellipse(ball.position.x,ball.position.y,15,15);



  //drawSprites();
}

	
	function vForce(){
  
		Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-25});

}
		

