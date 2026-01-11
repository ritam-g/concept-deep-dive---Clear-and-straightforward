const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

// ===== SHARP CANVAS (IMPORTANT) =====
function resize() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener("resize", resize);

// ===== CREATE REAL WATER DROPS =====
const drops = [];
const dropCount = 140;

for (let i = 0; i < dropCount; i++) {
  drops.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rx: 1.5 + Math.random() * 1.5, // width
    ry: 8 + Math.random() * 12,    // height
    speed: 4 + Math.random() * 4
  });
}

// ===== ANIMATION LOOP =====
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let d of drops) {
    ctx.fillStyle = `rgba(173,216,230,${0.6 + Math.random() * 0.3})`;

    ctx.beginPath();
    ctx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
    ctx.fill();

    d.y += d.speed;

    if (d.y > window.innerHeight) {
      d.y = -d.ry;
      d.x = Math.random() * window.innerWidth;
    }
  }

  requestAnimationFrame(animate);
}

animate();
let sound=new Audio('rain.mp3')
window.addEventListener("click",()=>{
  sound.play()
})