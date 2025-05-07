


document.addEventListener('DOMContentLoaded', function () {
  const gameFrame = document.querySelector('.gameFrame');
  const Mario = document.querySelector('.MarioDiv');


let marioX = 4;
let marioY = 10;

  function spawnObjects() {
    // Spawn one immediately
    spawnOneObject();
  
    // Then continue spawning every 3 seconds
    setInterval(spawnOneObject, 3000);
  }
  
  function spawnOneObject() {
    const objects = gameFrame.querySelectorAll('.object');
  
    if (objects.length >= 5) {
      gameFrame.removeChild(objects[0]);
    }
  
    const newObject = document.createElement('div');
    newObject.classList.add('object');
  
    const col = Math.floor(Math.random() * 20) + 1;
    const row = Math.floor(Math.random() * 10) + 11;
  
    newObject.style.gridColumn = col;
    newObject.style.gridRow = row;
  
    gameFrame.appendChild(newObject);
  
    if (!MarioSpawned) {
      moveMario(col, row - 1); // place Mario above block
      MarioSpawned = true;
    }
  }

  spawnObjects()

  /*function spawnObjects() {
    setInterval(() => {
      // Limit to 10 objects
      const objects = gameFrame.querySelectorAll('.object');
      if (objects.length >= 5) {
        gameFrame.removeChild(objects[0]);
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

      if (!MarioSpawned) {
      moveMario(col, row - 1);  // place Mario just above the block
      MarioSpawned = true;     // prevent future spawns
    }
    }, 3000);
  }

  spawnObjects()*/
  // Start after random delay
  /*
  const delay = Math.random() * 4000;
  setTimeout(spawnObjects, delay);*/


  


let timerId = null;

function isOutOfBounds(x, y) {
  return x > 20 || x < 1 || y > 20 || y < 1;
}

function moveMario(x, y) {
  marioX = x;
  marioY = y;

  Mario.style.gridColumn = marioX;
  Mario.style.gridRow = marioY;
}

function jumpMario() {
  /*if (timerId !== null) return; */// prevent double jumps

  const startY = marioY; // ← Save ground position
  let step = 0;

  timerId = setInterval(() => {
    step++;
    console.log('step:' + step)

    // Jump up for a few steps, then fall
    if (step <= 5) {
      marioY--;
      marioX++
    } else if (step <= 10) {
      marioY++;
      
    }

    moveMario(marioX, marioY);

    if (step === 10 || isOutOfBounds(marioX, marioY)) {
      clearInterval(timerId);
      timerId = null
      
    }
  }, 100);
}

// Trigger jump with Space
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    jumpMario();
  }
});

});



/*gameFrame.querySelectorAll('.object').forEach((el) => el.remove());*/


