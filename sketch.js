const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;
var box3,box4,pig2,log2;
var box5,log3,log4;

var bird;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810,550);
    log1 = new Log(810,460,300,PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810,420);
    log2 = new Log(810,380,300,PI/2);

    box5 = new Box(810,360,70,70);
    log3 = new Log(760,320,150,PI/7);
    log4 = new Log(870,320,150,-PI/7);

    bird = new Bird(100,101);
    
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
   
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log3.display();
    log4.display();
    box5.display();

    bird.display();

}