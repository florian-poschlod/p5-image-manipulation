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
let amplitude
let playing = false

function preload() {
  img = loadImage('image10.jpeg');
}

function setup() {
  pixelDensity(1)
  img.resize(imgWidth, 0)
  var canvas = createCanvas(img.width, img.height);
  canvas.parent('sketch-container');
  playHeadHeight = img.height / 4;
  osc = new p5.Oscillator();
  osc.amp(1)
  osc.scale(0, 1, 0, 1)
  amplitude = new p5.Amplitude()
  amplitude.setInput(osc)
}

function draw() {
  image(img, 0, 0)
  loadPixels()

  playHead = get(playHeadX, playHeadY, playHeadWidth, playHeadHeight)
  playHead.loadPixels()
  
  fill(255, 0, 0, 128)
  noStroke()
  rect(playHeadX, playHeadY, playHeadWidth, playHeadHeight)

  // pxAverage = Math.round((playHead.pixels[0] + playHead.pixels[1] + playHead.pixels[2]) / 3)
  pxAverage = playHead.pixels.reduce((acc, curr) => acc + curr) / playHead.pixels.length

  osc.setType('square')
  osc.freq(pxAverage * 0.5)

  let level = amplitude.getLevel()
  // pixels.forEach(px => level > 0.5 && px === 255)


  console.log(level)

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