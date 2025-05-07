


document.addEventListener('DOMContentLoaded', function () {
  const gameFrame = document.querySelector('.gameFrame'); //henter rammen
  const Mario = document.querySelector('.MarioDiv'); //henter div med Mario


let marioX = 4; // setter column for Mario
let marioY = 10; // setter row for mario

let MarioSpawned = false 
  
  function spawnOneObject() {
    const objects = gameFrame.querySelectorAll('.object'); //legger alle object i objects
  
    if (objects.length >= 5) {
      gameFrame.removeChild(objects[0]); //hvis objects er mer enn 5, fjern det første elementet i array
    }
  
    const newObject = document.createElement('div'); //lager ny div
    newObject.classList.add('object'); // gir div klassen object
  
    const col = Math.floor(Math.random() * 20) + 1; // velger en column mellom 1 og 20
    const row = Math.floor(Math.random() * 10) + 11; //velger en rad mellom 1 og 20
  
    newObject.style.gridColumn = col; // legger tallet fra col til style gridColumn
    newObject.style.gridRow = row; // legger tallet fra row til gridRow
  
    gameFrame.appendChild(newObject); //legger newObject til gameFrame
  
    if (!MarioSpawned) {
      moveMario(col, row - 1); // place Mario above block
      MarioSpawned = true;
    }
  }

  //kjører spawnObject i en interval
  function spawnObjects() {
    // Spawn one immediately
    spawnOneObject();
  
    // Then continue spawning every 3 seconds
    setInterval(spawnOneObject, 3000);
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


  

// timerId lagrer setInterval slik at man kan skru den av, er null som base
let timerId = null;

//funksjon for å sjekke om Mario er på eller utenfor kanten
function isOutOfBounds(x, y) {
  return x > 20 || x < 1 || y > 20 || y < 1;
}
//funksjon som beveger på Mario
function moveMario(x, y) {
  marioX = x; // x og y kommer som arguments
  marioY = y;

  Mario.style.gridColumn = marioX; // setter gridColumn til marioX
  Mario.style.gridRow = marioY; //setter gridRow til marioY
}

function jumpMario() {
  if (timerId !== null) return; // prevent double jumps

  const startY = marioY; // ← Save ground position
  let step = 0; // variabel som viser antall steg til Mario

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

    moveMario(marioX, marioY); // legger marioX, og marioY som parametre

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


