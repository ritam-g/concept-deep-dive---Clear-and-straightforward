const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Drops
let drops = [];
const dropCount = 200;

// Create drops
function createDrops() {
  drops = [];
  for (let i = 0; i < dropCount; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 18 + 12,
      speed: Math.random() * 4 + 3,
      opacity: Math.random() * 0.4 + 0.4,
      radius: Math.random() * 1.8 + 1.2
    });
  }
}
createDrops();

function drawDrop(drop) {
  // Tail
  ctx.beginPath();
  ctx.strokeStyle = `rgba(0, 150, 255, ${drop.opacity})`;
  ctx.lineWidth = 1;
  ctx.moveTo(drop.x, drop.y);
  ctx.lineTo(drop.x, drop.y + drop.length);
  ctx.stroke();

  // Head (round water drop)
  ctx.beginPath();
  ctx.fillStyle = `rgba(200, 230, 255, ${drop.opacity})`;
  ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Soft glow (water shine)
  ctx.shadowBlur = 6;
  ctx.shadowColor = "rgba(0,150,255,0.35)";

  for (const drop of drops) {
    drawDrop(drop);

    // Gravity
    drop.y += drop.speed;

    // Reset
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();
