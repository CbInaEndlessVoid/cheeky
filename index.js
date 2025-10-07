let count = 0;

document.getElementById("button").onclick = function() {
    // Generate random X and Y movement values
    const x = Math.random() * (100 - 1) + 1;
    const y = Math.random() * (100 - 1) + 1;

    // Move the button randomly
    document.getElementById("button").style.transform = `translate(${x}px, ${y}px)`;

    // Show a random number
    document.getElementById("randomnum").textContent = Math.trunc(Math.random() * (100000000 - 1) + 1);
};

document.addEventListener('mousemove', function(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;

  // Get coordinates relative to the entire document
  const pageX = event.pageX;
  const pageY = event.pageY;

  
});