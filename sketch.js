
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    var bobDiameter=40;

	//Cr/eate the Bodies Here.
	roof1=new Roof(392,70,220,39);
	//roof1=new Roof(width/2,height/4,width/7,20);

	startBobPositionX=width/2;
	startBobPositionY=height/4+391;	
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



	//Create a Ground
	

	//


	//rope1=new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
	//rope2=new Rope(bobObject2.body,roof1.body,-bobDiameter*1,0);
	//rope3=new Rope(bobObject3.body,roof1.body,0,0);
	//	rope4=new Rope(bobObject4.body,roof1.body,bobDiameter*1,0);
	//rope5=new Rope(bobObject5.body,roof1.body,bobDiameter*2,0);
	
	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}
	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}
	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}
	}
	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	
	}
	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}
	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)
	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/

	
    //Render.run(render);
	chain1=new Chain(bobObject1.body,roof1.body,-80,0);
	chain2=new Chain(bobObject2.body,roof1.body,-40,0);
	chain3=new Chain(bobObject3.body,roof1.body,0,0);
	chain4=new Chain(bobObject4.body,roof1.body,40,0);
	chain5=new Chain(bobObject5.body,roof1.body,80,0);

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(255,255,153);
  
  roof1.display();
  
 //rope1.display();
 //rope2.display();
 //rope3.display();
 //rope4.display();
 //rope5.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display()
  bobObject5.display();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


// function drawLine(constraint)
// {
//   bobBodyPosition=constraint.bodyA.position
//  roofBodyPosition=constraint.bodyB.position

//  roofBodyOffset=constraint.pointB;
  
//   roofBodyX=roofBodyPosition.x+roofBodyOffset.x
//   roofBodyY=roofBodyPosition.y+roofBodyOffset.y
//   line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
// }





