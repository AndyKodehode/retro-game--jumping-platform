document.addEventListener('DOMContentLoaded', function () {
  const gameFrame = document.querySelector('.gameFrame');

  function spawnObjects() {
    setInterval(() => {
      // Limit to 10 objects
      if (gameFrame.children.length >= 5) {
        gameFrame.removeChild(gameFrame.firstChild);
      }

      // Create and style new object
      const newObject = document.createElement('div');
      newObject.classList.add('object');

      // Random grid position (1-based index)
      const col = Math.floor(Math.random() * 20) + 1;
      const row = Math.floor(Math.random() * 10) + 1;
      newObject.style.gridColumn = col;
      newObject.style.gridRow = row;

      gameFrame.appendChild(newObject);
    }, 3000);
  }

  // Start after random delay
  const delay = Math.random() * 4000;
  setTimeout(spawnObjects, delay);
});

/*gameFrame.querySelectorAll('.object').forEach((el) => el.remove());*/
