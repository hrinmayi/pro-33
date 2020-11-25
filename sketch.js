const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var g1,g2,g3,g4;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var paeticle;
var turn=0;
var gameState="play";

function setup() {
  createCanvas(800,450);
  engine = Engine.create();
  world = engine.world;
g1=new Ground(200,780,500,20);
g2=new Ground(0,225,400,10);
g3=new Ground(200,10,175,10);
g4=new Ground(440,225,400,10);

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,heigth=divisionHeight/2,10,divisionHeight));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,135,10));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,195,10));
  }
  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,255,10));
  }
  noStroke();
   textSize(35)
   fill("white")
    text("Score  " + turn, 300, 50)
 
    g1.display();  
    g2.display();
    g3.display();
    g4.display();
    



  drawSprites();
}