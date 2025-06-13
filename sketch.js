let campos = [];
let tamanho = 80;

function setup() {
  createCanvas(400, 400);
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      campos.push({
        x: x * tamanho + 50,
        y: y * tamanho + 50,
        estado: "vazio", // ou "plantado", "crescido"
        tempo: 0,
      });
    }
  }
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100, 200, 100);
  for (let c of campos) {
    // Desenhar o campo
    stroke(0);
    fill(139, 69, 19);
    rect(c.x, c.y, tamanho - 10, tamanho - 10, 10);

    // Atualizar crescimento
    if (c.estado === "plantado") {
      c.tempo += deltaTime;
      if (c.tempo > 5000) {
        c.estado = "crescido";
      }
    }

    // Desenhar planta
    noStroke();
    if (c.estado === "plantado") {
      fill(0, 150, 0);
      ellipse(c.x + 30, c.y + 30, 20, 20);
    } else if (c.estado === "crescido") {
      fill(255, 215, 0);
      ellipse(c.x + 30, c.y + 30, 30, 30);
    }
  }

  fill(255);
  textSize(16);
  text("Clique para plantar ou colher!", width / 2, 20);
}

function mousePressed() {
  for (let c of campos) {
    if (
      mouseX > c.x &&
      mouseX < c.x + tamanho - 10 &&
      mouseY > c.y &&
      mouseY < c.y + tamanho - 10
    ) {
      if (c.estado === "vazio") {
        c.estado = "plantado";
        c.tempo = 0;
      } else if (c.estado === "crescido") {
        c.estado = "vazio";
        c.tempo = 0;
      }
    }
  }
}
