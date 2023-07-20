let bgImg
let xBg = 0

let bgCloud
let xCloud = 0

function preload() {
  bgImg = loadImage('assets/bg.jpeg')
  bgCloud = loadImage('assets/cloud.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  moveBgImg()
  moveCloud()
}

function moveBgImg() {
  
  image(bgImg, xBg, 0, width, height)
  image(bgImg, xBg + width, 0, width, height)
  
  xBg -= 1
  if (xBg <= - width) {
    xBg = 0
  }
}

function moveCloud() {
  
  image(bgCloud, xCloud, 150, 100, 100)
  image(bgCloud, xCloud + width, 150, 100, 100)
  
  xCloud -= 1.4
  if (xCloud <= - width) {
    xCloud = 0
  }
}