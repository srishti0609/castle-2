const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var t1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(290,150,20,450);
  box2=new Box(320,200,50,250);
  box3=new Box(370,240,30,200);
  box6=new Box(400,290,50,150);
  box4=new Box(450,240,30,200);
  box5=new Box(470,200,50,250);
  box7=new Box(530,150,20,450);
  
}

function draw() {
  background(0,0,0); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  triangle(400,290,425,250,450,290);
  triangle(470,200,495,160,520,200);
  triangle(320,200,345,160,370,200);
  
 
  drawSprites();
}