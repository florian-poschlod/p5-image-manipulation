let imgWidth = 600;
let img;

let playHead;
let playHeadWidth = 1;
let playHeadHeight = 1;
let playHeadX = 0;
let playHeadY = 0;
let playHeadSpeed = 0.5;

let osc;

let pxAverage;

function preload() {
  img = loadImage('image03.jpeg');
}

function setup() {
  pixelDensity(1)

  img.resize(imgWidth, 0)
  // playHeadHeight = img.height;
  var canvas = createCanvas(img.width, img.height);
  canvas.parent('sketch-container');

  osc = new p5.Oscillator();
  // osc.setType('square')
  osc.amp(1)
  // osc.start()
  // userStartAudio()
}

function draw() {
  image(img, 0, 0)
  
  
  playHead = get(playHeadX, playHeadY, playHeadWidth, playHeadHeight)
  playHead.loadPixels()
  
  fill(255, 0, 0, 128)
  noStroke()
  rect(playHeadX, playHeadY, playHeadWidth, img.height)
  
  console.log(playHead.pixels, playHeadX, playHeadY)

  pxAverage = Math.round((playHead.pixels[0] + playHead.pixels[1] + playHead.pixels[2]) / 3)

  console.log(pxAverage)

  if (pxAverage < 128) {
    osc.setType('sine')
  } else {
    osc.setType('square')
  }

  osc.freq(pxAverage * 2)
  
  if (playHeadX < width - playHeadWidth) {
    playHeadX += playHeadSpeed
  } else {
    playHeadX = 0
    playHeadY += 1
  }
}

function mousePressed() {
  osc.start()
}