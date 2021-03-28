const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2
var box3
var box4
var box5
var Ball1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,330,50,50);
box2 = new Box(100,330,50,50);
box3 = new Box(100,280,50,50);
box4 = new Box(200,280,50,50);
box5 = new Box(150,230,50,50);

    ground = new Ground(200,380,400,50);
    Ball1 = new Ball(200,250,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    Ball1.display();

   
}