let imgWidth = 600;
let img;

let playHead;
let playHeadWidth = 1;
let playHeadHeight;
let playHeadX = 0;
let playHeadY = 0;
let playHeadSpeed = 1;

function preload() {
  img = loadImage('image02.jpeg');
}

function setup() {
  pixelDensity(1)
  img.resize(imgWidth, 0)
  var canvas = createCanvas(img.width, img.height);
  canvas.parent('sketch-container');
  playHeadHeight = img.height;
}

function draw() {
  image(img, 0, 0)

  playHead = get(playHeadX, playHeadY, playHeadWidth, playHeadHeight)
  playHead.loadPixels()

  fill(255, 0, 0, 128)
  noStroke()
  rect(playHeadX, playHeadY, playHeadWidth, playHeadHeight)

  console.log(playHead.pixels)

  if (playHeadX < width - playHeadWidth) {
    playHeadX += playHeadSpeed
  } else {
    playHeadX = 0
  }
}