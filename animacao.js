const frames = ["walk1.png", "walk2.png"];
let frame = 0;

const walker = document.getElementById("walker");

let pos = 0;
let lado = 0; // 0=topo, 1=direita, 2=baixo, 3=esquerda
const speed = 10;

function ajustarDirecao(invertido) {
  walker.style.transform = invertido ? "scaleX(1)" : "scaleX(-1)";
}

setInterval(() => {
  // alterna imagem
  frame = frame === 0 ? 1 : 0;
  walker.src = frames[frame];

  pos += speed;

  const w = window.innerWidth - walker.offsetWidth;
  const h = window.innerHeight - walker.offsetHeight;

  if (lado === 0) { // topo
    ajustarDirecao(false);
    walker.style.top = "10px";
    walker.style.left = pos + "px";
    walker.style.bottom = "auto";
    if (pos >= w) { lado = 1; pos = 0; }
  }

  if (lado === 1) { // direita
    ajustarDirecao(false);
    walker.style.left = w + "px";
    walker.style.top = pos + "px";
    if (pos >= h) { lado = 2; pos = 0; }
  }

  if (lado === 2) { // baixo
    ajustarDirecao(true);
    walker.style.top = "auto";
    walker.style.bottom = "10px";
    walker.style.left = (w - pos) + "px";
    if (pos >= w) { lado = 3; pos = 0; }
  }

  if (lado === 3) { // esquerda
     ajustarDirecao(true);
    walker.style.left = "10px";
    walker.style.top = (h - pos) + "px";
    if (pos >= h) { lado = 0; pos = 0; }
  }
}, 220);

const jacob = document.getElementById("jacob");

function aparecerJacob() {
  const maxX = window.innerWidth - jacob.offsetWidth;
  const maxY = window.innerHeight - jacob.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  jacob.style.left = x + "px";
  jacob.style.top = y + "px";
  jacob.style.display = "block";

  setTimeout(() => {
    jacob.style.display = "none";
  }, 2000);
}

setInterval(() => {
  if (Math.random() < 0.7) {
    aparecerJacob();
  }
}, 4000);