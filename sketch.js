var canvas;
var music;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box=createSprite(random(10,750),300,20,20);
    box.shapeColor ="white";
    box.velocityX=3;
    box.velocityY=3;

    surface1=createSprite(100,590,180,20);
    surface1.shapeColor="red";

    surface2=createSprite(300,590,180,20);
surface2.shapeColor="yellow";

    surface3=createSprite(500,590,180,20);
surface3.shapeColor="blue";
    surface4=createSprite(700,590,180,20);
surface4.shapeColor="orange"




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
