
var skills = ["Customer Service", "MIS reports", "Social Media Ads", "Email Marketing"]
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const a = 2 * Math.PI / 6;
const r = 100;

// 1
x = r;
y = r;
drawHexagon(x, y);

// 2
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);

// 3
x = x + r + r * Math.cos(a);
y = y - r * Math.sin(a);
drawHexagon(x, y);

//4
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);


function drawHexagon(x, y) {
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));

  }
  ctx.fillStyle = "#10ACA3";
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}
function openNav() {
  document.getElementById("about").style.width = "100%";
}

function closeNav() {
  document.getElementById("about").style.width = "0%";
}
