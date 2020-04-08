let dino;
let dImg;
let tImg;
let bImg;
let train =  [];

function preload() {
  dImg = loadImage('dino.jpg');
  tImg = loadImage('train.jpg');
  bImg = loadImage('background.jpg');
  
} 
function setup() {
  createCanvas(600, 450);
  dino = new Dino();
  
}

function keyPressed() {
  if (key = '  ') {   
    dino.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    train.push(new Train());
  } 
  
  
  background(bImg);
   for (let t of train) {
    t.move();
    t.show();
  }
  
  dino.show();
  dino.move();
   
}    