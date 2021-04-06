let imgWidth = 600
let img
let playHead

function preload() {
  img = loadImage('image02.jpeg');
}

function setup() {
  pixelDensity(1)
  img.resize(imgWidth, 0)
  var canvas = createCanvas(img.width, img.height);
  canvas.parent('sketch-container');
  image(img, 0, 0)
}

function draw() {
  playHead = get(1, 1, 1, 4)
  playHead.loadPixels()
  console.log(playHead)
}