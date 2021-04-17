let img
let imgWidth = 600
let scaleFactor = 1
let r = 0
let g = 0
let b = 0

function preload() {
  img = loadImage('image05.jpeg');
}

function setup() {
  pixelDensity(1)
  img.resize(imgWidth, 0)
  var canvas = createCanvas(img.width * scaleFactor, img.height * scaleFactor);
  canvas.parent('sketch-container');
}

function draw() {
  background(120)

  img.loadPixels()
  loadPixels()
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      let index = (x + y * img.width) * 4;

      r = img.pixels[index + 0]
      g = img.pixels[index + 1]
      b = img.pixels[index + 2]

      // console.log(r, g, b)

      fill(r, g, b)
      noStroke()
      rect(x * scaleFactor, y * scaleFactor, scaleFactor, scaleFactor)
    }
  }
}