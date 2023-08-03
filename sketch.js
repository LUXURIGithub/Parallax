//Dino load
let bgImg
let xBg = 0
let dinoImages = []
let bgCloud
let xCloud = 0
let currentDinoImage = 0


//Gravity load
let y; 
let ySpeed;
let gravity = 0.3; 
let isOnGround = true; 

function preload() {
  bgImg = loadImage('assets/bg.jpeg')
  bgCloud = loadImage('assets/cloud.png')
  for (let i = 1; i <= 8; i++) {
    dinoImages.push(loadImage(`assets/dino/${i}.png`))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  y = 600;
  ySpeed = 0;
}

function draw() {
  moveBgImg()
  moveCloud()
  drawDino()
  
  ySpeed += gravity;
  y += ySpeed;
  
  if (y > 600) {
  y = 600;
  ySpeed *= -0.5; // Fazer a bola "quicar" ao chegar no chão
  isOnGround = true;
  } else {
  isOnGround = false; // A bola está no ar se não chegou ao chão
  }
  
}

function moveBgImg() {
  
  image(bgImg, xBg, 0, 1280, 850)
  image(bgImg, xBg + 1280, 0, 1280, 850)
  
  xBg -= 1
  if (xBg <= - width) {
    xBg = 0
  }
}

function moveCloud() {
  
  image(bgCloud, xCloud, 150, 100, 100)
  image(bgCloud, xCloud + width, 150, 100, 100)
  
  xCloud -= 0.5
  if (xCloud <= - width) {
    xCloud = 0
  }
}

function drawDino() {
  clear()
  moveBgImg()
  moveCloud()
  image(dinoImages[currentDinoImage], 30, y, 150, 150)
  if (frameCount % 5 === 0) {
    currentDinoImage = (currentDinoImage + 1) % dinoImages.length;
  }
}


function keyPressed() {
  if (keyCode === 32 && isOnGround) {  
    ySpeed = -10; 
  }
} 
