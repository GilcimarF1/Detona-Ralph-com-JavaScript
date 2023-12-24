const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),

  },
  values: {

    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    resultOriginal: 0,
    curretTime: 59,
    originalTime: 60,

  },
  actions: {
    liveId: null,
    timerId: null,
    countDownTimerId: setInterval(countDown, 1000),
  }
};


function countDown() {
  state.values.curretTime--;

  if (state.values.curretTime <= 0) {
    state.values.curretTime = state.values.originalTime;

    alert("Game Over! O seu resultado foi: " + state.values.result);
    clearInterval(state.values.result)
    alert("Clique para iniciar novo jogo");
    state.values.result = state.values.resultOriginal;
  }

  state.view.timeLeft.textContent = state.values.curretTime;
}

state.view.timeLeft.textContent = state.values.curretTime;


function playSound(AudioName) {
  let audio = new Audio(`./src/audios/${AudioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function randomSquare() {
  state.view.squares.forEach((square) => { square.classList.remove("enemy") });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;

}

function moveEnemy() {
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}


function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound("hit");
      }

    });

  });

}

function initialaze() {

  moveEnemy();
  addListenerHitBox();

}
initialaze();

function randomSquare() {
  state.view.squares.forEach((square) => { square.classList.remove("enemy") });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;

}

function moveEnemy() {
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}


function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound("hit");
      }

    });

  });

}

function initialaze() {

  moveEnemy();
  addListenerHitBox();

}
initialaze();
