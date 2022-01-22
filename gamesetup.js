let food;
let snake;
let siz=15;
let w;
let h;
function setup() {
  createCanvas(600, 600);
  w=floor(width/siz);
  h=floor(height/siz);
 foodlocation();
  frameRate(20);
  snake=new Snake();
}
function foodlocation(){
  let x=floor(random(w));
  let y=floor(random(h));
  food=createVector(x,y);
}

function keyPressed(){
  if(keyCode==LEFT_ARROW){
    snake.setdir(-0.5,0);
  }
  else if(keyCode==RIGHT_ARROW){
    snake.setdir(0.5,0);
  }
  else if(keyCode==UP_ARROW){
    snake.setdir(0,-0.5);
  }
  else if(keyCode==DOWN_ARROW){
    snake.setdir(0,0.5);
  }
}
function draw() {
  scale(siz);
  background(145,195,145);
  if(snake.eat(food)) {
    foodlocation();
  }
  snake.update();
  snake.show();
  
  if(snake.endgame()){
    console.log("endgame");
    background(209,0,0);
    noLoop();
  }
  noStroke();
  fill (209,0,0);
  rect(food.x,food.y,1,1);

}

