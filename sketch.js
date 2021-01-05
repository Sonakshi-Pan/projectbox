var canvas;
var music;
var ball,box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(90,590,200,50)
    box1.shapeColor="red";
    box2=createSprite(300,590,200,50)
    box2.shapeColor="yellow";
    box3=createSprite(510,590,200,50)
    box3.shapeColor="green";
    
    box4=createSprite(720,590,200,50)
    box4.shapeColor="blue";

    //create box sprite and give velocity
    ball=createSprite(random(20,750),120,40,40)
    ball.shapeColor = "white";
    ball.velocityY=4;
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
     //ball.bounceOff(edges[3]);
     //ball.bounceOff(edges[3]);
    
    if(box1.isTouching(ball)&&ball.collide(box1)){

        ball.shapeColor = "red";

    }

    if(box2.isTouching(ball)&&ball.collide(box2)){

        ball.shapeColor = "yellow";

    }
    if(box3.isTouching(ball)&&ball.collide(box3)){

        ball.shapeColor = "green";
        //music.play();

    }
    if(box4.isTouching(ball)&&ball.collide(box4)){

        ball.shapeColor = "blue";
        //music.stop();

    }
      
  
    drawSprites();
    


    //add condition to check if box touching surface and make it box
}
