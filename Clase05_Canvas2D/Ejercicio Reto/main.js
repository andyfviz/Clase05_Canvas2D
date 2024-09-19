const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

let circlePos = {};

function CPos() {
  circlePos = {
    x1: CANVAS.width/8,
    y1:CANVAS.height/8,

    x2: CANVAS.width - 100,
    y2: CANVAS. height/8,

    x3: CANVAS.width/8,
    y3:CANVAS. height-100,

    x4: CANVAS.width -100,
    y4:CANVAS.height -100,

    x5:CANVAS.width/2,
    y5: CANVAS.height/2,
  };
}
  function renderCircles (){

  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  function drawCircle (x,y){
  CTX.strokeStyle = "#00ff99";
  CTX.lineWidth = 10;
  CTX.beginPath();
  CTX.ellipse(x, y, 85, 85, 5, 0, PI2);
  CTX.closePath();
  CTX.stroke();
  }
function drawLine (x1,y1,x2,y2){
  CTX.strokeStyle = "#ff0099";
    CTX.lineWidth = 5;
    CTX.beginPath();
    CTX.moveTo(x1, y1);
    CTX.lineTo(x2, y2);
    CTX.stroke();
}
drawCircle(circlePos.x1, circlePos.y1);
drawCircle(circlePos.x2, circlePos.y2);
drawCircle(circlePos.x3, circlePos.y3);
drawCircle(circlePos.x4, circlePos.y4);
drawCircle(circlePos.x5, circlePos.y5);

drawLine(circlePos.x1, circlePos.y1, circlePos.x3, circlePos.y3);
drawLine(circlePos.x1, circlePos.y1, circlePos.x2, circlePos.y2);
drawLine(circlePos.x3, circlePos.y3, circlePos.x4, circlePos.y4);
drawLine(circlePos.x4, circlePos.y4, circlePos.x2, circlePos.y2);
}
CPos();

window.addEventListener("resize", updateCanvasSize, renderCircles);
requestAnimationFrame(renderCircles);