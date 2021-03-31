
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;

function preload()
{

	bg =loadImage("Images/BG img.PNG")
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=new Boy(200,910);
	tree=new Tree(1000,710);
	ground=new Ground(750,990,1500,15);
	stone=new Stone(105,845,30);
	sling=new Slingshot(stone.body,{x:105, y:841});
	mango1=new Mango(1033,481,50);
	mango2=new Mango(762,604,30);
	mango3=new Mango(890,520,40);
	mango4=new Mango(988,620,60);
	mango5=new Mango(858,632,30);
	mango6=new Mango(1110,587,40);
	mango7=new Mango(1198,575,55);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  	fill("magenta");
    textSize(25);
	text("Press SPACE to get another chance to play!! 	:)",10,224);

	boy.display();
	tree.display();
	ground.display();
	stone.display();
	sling.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone,lmango){

		  mangoBodyPosition=lmango.body.position
		   stoneBodyPosition=lstone.body.position 

		   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
		   if(distance<=lmango.r+lstone.r) {  
		   Matter.Body.setStatic(lmango.body,false); }
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:105, y:845});
	  sling.attach(stone.body);
	}
  }


