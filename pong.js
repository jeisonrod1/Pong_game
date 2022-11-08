// Getting reference to Canvas object
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

// Setting dimensions of canvas
const canvasWidth = 700;
const canvasHeight = 500;
const paddleWidth = 15;
const paddleHeight = 80;
const radius = 10;


// render rect
function renderBackground() {
  ctx.fillStyle = 'olive';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

//render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 5 * Math.PI);
  ctx.fillStyle = 'beige';
  ctx.fill();
}

function renderPaddle(posY)  {
  ctx.fillStyle = 'white';
  const paddleLeft = ctx.fillRect(20, posY, paddleWidth, paddleHeight);
    return paddleLeft;
}
function renderPaddle2(posY)  {
  ctx.fillStyle = 'white';
  const paddleRight = ctx.fillRect(670, posY, paddleWidth, paddleHeight);
  return paddleRight;
}

let posX = 10;
let posY = 10;
let vx = +5;
let vy = +5;
let paddleLeftY = 0;
let paddleRightY = 0;

setInterval(() => {
  renderBackground();
  renderBall(posX, posY);
  renderPaddle(paddleLeftY);
  renderPaddle2(paddleRightY);
  posX += vx;
  posY += vx;
    if (posX + radius >= canvasWidth || posX - radius <= 0) {
     vx =-1 * vx;
     }
     
    if (posY + radius >= canvasWidth || posY - radius <= 0) {
        vy =-1 * vy;
    }
    if (posX - radius >= canvasWidth || posY + radius <= -1) {
        vx =0 * vx;
    }
    if (posX - radius >= canvasWidth || posY + radius <= -1) {
        vy =0 * vy;
    }
  // Vertical axis
}, 30);

document.addEventListener('keypress', (e) => {
  if (e.key === 's') {
    paddleLeftY += 5;
  }
  if (e.key === 'w') {
    paddleLeftY -= 5;
  } 
});

  document.addEventListener('keypress', (e) => {
    if (e.key === 'k') {
      paddleRightY += 5;
    }
    if (e.key === 'i') {
      paddleRightY -= 5;
    } 
});








