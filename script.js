
/*

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

*/

/*gameFrame.querySelectorAll('.object').forEach((el) => el.remove());*/


const Mario = document.querySelector('.MarioDiv');

let marioPositionX = 4; // grid-column
let marioPositionY = 10;  // grid-row
let timerId;

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    timerId = setInterval(function(){
      marioPositionX += 1;
      marioPositionY -= 1;
  
      Mario.style.gridColumn = marioPositionX;
      Mario.style.gridRow = marioPositionY;
      console.log('X:', marioPositionX, 'Y:', marioPositionY);

      if (
        marioPositionX > 20 || 
        marioPositionX < 1 || 
        marioPositionY > 20 || 
        marioPositionY < 1
      ) {
        clearInterval(timerId);
        timerId = null; // Allow restarting later
      }
    }, 200)

     
   
  }

  
});