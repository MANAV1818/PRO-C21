
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var myball;
var ground;
var left;
var right;
 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400);
	  

    myball=new Ball(20,70,15);
	 

	rectMode(CENTER);
    ellipseMode(RADIUS);
  
}


function draw() {
  background(black);
  



  myball.display();
  ground.show();
  left.show();
  right.show();
  
  drawSprites();

}



