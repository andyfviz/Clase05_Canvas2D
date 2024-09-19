const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

var mouseX=0;
var mouseY=0;

const lines = [
  { startX: 0, startY: 25 },
  { startX: 50, startY: 25 },
  { startX: 100, startY: 25 },
  { startX: 200, startY: 25 },
  { startX: 300, startY: 25 },
  { startX: 400, startY: 25 },
  { startX: 500, startY: 25 },
  { startX: 600, startY: 25 },
  { startX: 700, startY: 25 },
  { startX: 800, startY: 25 },
  { startX: 900, startY: 25 },
];

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function updateCoords (eventData){
  mouseX = eventData.clientX;
  mouseY = eventData.clientY;

  console.log (mouseX, mouseY);
}

function renderLines() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  lines.forEach(line => {
    CTX.strokeStyle = "blue";
    CTX.lineWidth = 3;
    CTX.beginPath();
    CTX.moveTo(line.startX, line.startY); // Start at the specified start point
    CTX.lineTo(mouseX, mouseY); // End at the current mouse position
    CTX.stroke();
  });

  /*CTX.strokeStyle = colorTrazo;
  CTX.lineWidth = grosorLinea;
  CTX.beginPath();
  CTX.moveTo(origenX, origenY);
  CTX.lineTo (finalX, finalY);
  CTX.stroke();*/

 requestAnimationFrame(renderLines);
}



window.addEventListener("mousemove", updateCoords);
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);
