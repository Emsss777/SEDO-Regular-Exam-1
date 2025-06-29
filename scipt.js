// Helper to set box color
function setBoxColor(color) {
  document.getElementById('box').style.backgroundColor = color;
}

// Apply text input color
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  setBoxColor(color);
});

// Generate a random hex color
function randomHex() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});

// Branch 2

// Branch 3