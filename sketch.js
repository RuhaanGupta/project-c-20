var c,c1,c2,c3,c4;
var m,m1,m2,m3,m4;
function preload() {
  c1.loadImage("cat2.png");
  c2.loadImage("cat2.png");
  c3.loadImage("cat3.png");
  c4.loadImage("cat4.png");
  m1.loadImage("mouse1.png");
  m2.loadImage("mouse2.png");
  m3.loadImage("mouse3.png");
  m4.loadImage("mouse4.png");
}

function setup(){
    createCanvas(400,400);
    c = createSprite(200,200,20,20);
    c.addImage("cimg",c1);

    m = createSprite(200,200,20,20);
    m.addImage("mt",m1);
}

function draw() {
    background(180);
    
    keyPressed();

    drawSprites();
}


function keyPressed(){
      if(keyDown("up_arrow")){ 
        m.changeImage("mt",m2);
        //m.frameDelay = 25;

   
       }
    if(keyDown("down_arrow")){
        m.changeImage("mt",m3);
        //m.frameDelay = 25;
   
   }


}
