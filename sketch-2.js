let imgWidth = 640;
let img;
let playHead;
let playHeadWidth = 4;
let playHeadHeight = 1;
let playHeadX = 0;
let playHeadY = 0;
let playHeadSpeed = 1;
let osc;
let pxAverage;
let playing = false

function preload() {
  img = loadImage('image09.jpeg');
}

function setup() {
  pixelDensity(1)
  img.resize(imgWidth, 0)
  var canvas = createCanvas(img.width, img.height);
  canvas.parent('sketch-container');
  playHeadHeight = img.height / 4;
  osc = new p5.Oscillator();
  osc.amp(1)
}

function draw() {
  image(img, 0, 0)

  playHead = get(playHeadX, playHeadY, playHeadWidth, playHeadHeight)
  playHead.loadPixels()
  
  fill(255, 0, 0, 128)
  noStroke()
  rect(playHeadX, playHeadY, playHeadWidth, playHeadHeight)

  // pxAverage = Math.round((playHead.pixels[0] + playHead.pixels[1] + playHead.pixels[2]) / 3)
  pxAverage = playHead.pixels.reduce((acc, curr) => acc + curr) / playHead.pixels.length
  console.log(pxAverage)

  console.log(pxAverage)

  osc.setType('square')
  osc.freq(pxAverage * 2)

  if (playHeadX < width - playHeadWidth) {
    playHeadX += playHeadSpeed
  } else {
    playHeadX = 0
    playHeadY += playHeadHeight
  }

  if (playHeadY == height) {
    playHeadY = 0
  }
}

function mousePressed() {
  playing = !playing

  if (!playing) {
    osc.start()
  } else {
    osc.stop()
  }
}