var cat,mouse,catAnimation,mouseAnimation,catImage,mouseImage,background1,backgroundImage

var catFinal,mouseFinal

function preload() {
    //load the images here
catImage=loadImage("images/cat1.png");
mouseImage=loadImage("images/mouse1.png");
catAnimation=loadAnimation("images/cat2.png","images/cat3.png");
mouseAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");
 backgroundImage=loadImage("images/garden.png");
 catFinal=loadAnimation("images/cat4.png");
 mouseFinal=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(800,600,40,40);
    cat.addImage(catImage);
    cat.addAnimation("running",catAnimation);
    cat.addAnimation("sit",catFinal)
    cat.scale=0.2
    mouse=createSprite(200,600,40,40);
    mouse.addImage(mouseImage);
    mouse.addAnimation("taunting",mouseAnimation);
    mouse.addAnimation("cheese",mouseFinal);
    mouse.scale=0.2

}

function draw() {

    background(backgroundImage);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.changeAnimation("sit");
       mouse.changeAnimation("cheese");
       cat.velocityX=0 
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.changeAnimation("running");
      mouse.changeAnimation("taunting");
  }




}
