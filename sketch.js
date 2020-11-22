const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
 
var engine;
var world;
var particles = [];
var plinkos = [];
var division=[];
var score=0;
var count=0;
var particle;
var divisionHeight=300;
var ground;
var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  
}
 
function draw() {
  background("black");

  Engine.update(engine);
  ground.display();
 
     for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   fill("yellow");
   textSize(20);
  text("Score:"+score,50,200);
  fill("red");
  textSize(15);
  text("500",30,500);
  text("500",110,500);
  text("500",190,500);
  text("100",270,500);
  text("100",350,500);
  text("100",430,500);
  text("100",510,500);
  text("300",590,500);
  text("300",670,500);
  text("300",750,500);

 

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

 

  if (gameState==="end"){
    textSize(100);
    text("GameOver", 150, 250);
  }
   
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
