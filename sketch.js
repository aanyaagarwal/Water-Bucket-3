var bucket; 
var Background;
var Background2;
var bucket2;

function setup() {
  createCanvas(1000, 1000);
  Background = createSprite(390, 270, 1000, 1000);
  Background.addImage(grassImage);
  //Background.x = Background.width/2;
  Background.scale = 3;

  bucket = createSprite(100, 100, 20, 20)
  bucket.addImage(bucketImage);
  bucket.scale = 0.5;

  bucket2 = createSprite(300, 200, 100, 100);
  bucket2.addImage(bucketImage2);

}

function preload(){
  grassImage = loadImage("Images/bg.jpg");

  bucketImage = loadImage("Images/Bucket_1.png");
  bucketImage2 = loadImage("Images/Bucket_2.png")

  }

function draw() {
  //Background.velocityX = -3
  
  //if(Background.x < 0){
    //Background.x = Background.width/2;
  //}

  drawSprites();
}