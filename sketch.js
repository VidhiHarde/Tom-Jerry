var Tom,TomImage1,TomImage2,TomImage3,TomImage4;
var Jerry,JerryImage1,JerryImage2,JerryImage3,JerryImage4;
var Garden,GardenImage;


function preload() {
    //load the images here
    TomImage1=loadAnimation("images/tomOne.png");
    TomImage2=loadAnimation("images/tomTwo.png");
    TomImage3=loadAnimation("images/tomThree.png");
    TomImage4=loadAnimation("images/tomFour.png");

    JerryImage1=loadAnimation("images/jerryOne.png");
    JerryImage2=loadAnimation("images/jerryTwo.png")
    JerryImage3=loadAnimation("images/jerryThree.png");
    JerryImage4=loadAnimation("images/jerryFour.png");

    GardenImage=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
Garden=createSprite(200,200,200,200);
Garden.addImage("garden",GardenImage);

Tom=createSprite(600,400,200,200);
Tom.addAnimation("tom",TomImage1);
Tom.scale=0.1;

Jerry=createSprite(100,400,200,200);
Jerry.addAnimation("jerry",JerryImage1)
Jerry.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(Tom.x-Jerry.x<(Tom.width-Jerry.width)/2){
      Tom.velocityX=0;
      Tom.addAnimation("TomStopped",TomImage4);
      Tom.changeAnimation("TomStopped");

      Jerry.addAnimation("JerryStopped",JerryImage4);
      Jerry.changeAnimation("JerryStopped");
  }



drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode===LEFT_ARROW){

    Tom.velocityX=-5;
    Tom.addAnimation("TomRunning",TomImage2);
    Tom.changeAnimation("TomRunning");

    Jerry.addAnimation("JerryTeasing",JerryImage3);
    Jerry.changeAnimation("JerryTeasing");
}




}
