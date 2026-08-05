const ui = document.getElementById("ui");
const totalItems = 100;

// Dynamic Mobile Responsive Scaler
function updateScale() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // Base bounding size of animation grid is ~480px x 480px
  const scaleX = (vw * 0.90) / 480;
  const scaleY = (vh * 0.85) / 480;
  const scale = Math.min(1.15, Math.min(scaleX, scaleY));
  document.documentElement.style.setProperty('--app-scale', scale.toFixed(3));
}

window.addEventListener('resize', updateScale);
window.addEventListener('orientationchange', updateScale);
updateScale();

// Build Love Elements
for (let i = 1; i <= totalItems; i++) {
  const love = document.createElement("div");
  love.className = "love";
  love.style.setProperty("--i", i);

  love.innerHTML = `
    <div class="love_horizontal">
      <div class="love_vertical">
        <div class="love_word">I love you</div>
      </div>
    </div>
  `;

  ui.appendChild(love);
}
