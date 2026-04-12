const board = document.querySelector(".board");
const score = document.querySelector("#total-score");
const maxPoints = document.querySelector("#high-score");
const timeer = document.querySelector("#time");
const blockHeight = 30;
const blockWidth = 30;

// change according to the size of the screens
const cols = Math.floor(board.clientWidth / blockWidth); // max cols
const rows = Math.floor(board.clientHeight / blockHeight); // max rows
// directions for snake
let direction = "left";
let timerInterval;
let seconds = 0;
let gameLoop;
let points = 0;
let maxScore = 0;
let speed = 700;
maxScore = parseInt(localStorage.getItem("highScore")) || 0;
maxPoints.textContent = maxScore;
// array for block initially it is 1D but we will show it as 2D on RUN TIME
let blocks = [];

// food for snake
let food = {};
// = {
//   x: Math.floor(Math.random() * rows),
//   y: Math.floor(Math.random() * cols),
// };
// initial snake size = 1;
let snake = [];
// ✅ newFood use karo aur sirf object return karo
function generateFood() {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
  } while (snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y));

  blocks[`${newFood.x}-${newFood.y}`].classList.add("food"); // add karo
  return newFood;
}
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    const mint = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    timeer.textContent = `${mint}:${sec}`;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
function colisionWithSnake(head) {
  return snake.some((segment) => segment.x === head.x && segment.y === head.y);
}
function initGame() {
  board.innerHTML = "";
  points = 0;
  speed = 700;
  blocks = [];
  direction = "left";
  timeer.textContent = "00:00";
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  startTimer();
  snake = [{ x: 1, y: 15 }];

  // create the blocks on board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const block = document.createElement("div");
      block.classList.add("block");
      board.appendChild(block);
      // block.textContent = `${r}-${c}`;
      blocks[`${r}-${c}`] = block;
    }
  }
  food = generateFood();
  clearInterval(gameLoop);
  gameLoop = setInterval(render, speed);
}
/**
 * Renders the current state of the snake game.
 * Adds the "fill" class to the blocks where the snake is currently located.
 */

// this method is for checking the snake is out of bound
function isOutOfBounds(head) {
  return head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols;
}
function resterMaxScore() {
  localStorage.removeItem("highScore");
  maxScore = 0;
  maxPoints.textContent = maxScore;
}
// this method control the movement of snake and food
// blocks[`${food.x}-${food.y}`].classList.add("food");
function render() {
  let head = null;

  // calculate the head for snake and move the snake
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }
  // check the snake is out of bound
  if (isOutOfBounds(head) || colisionWithSnake(head)) {
    maxScore = Math.max(maxScore, points);
    maxPoints.textContent = maxScore;
    localStorage.setItem("highScore", maxScore);
    stopTimer();
    score.textContent = 0;
    clearInterval(gameLoop);
    Modal();
    return;
  }

  // check the snake eats the food
  if (food.x === head.x && food.y === head.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    points += 1;
    if (points % 5 === 0) {
      speed = Math.max(100, speed - 100); // ✅ minimum 100ms
      clearInterval(gameLoop);
      gameLoop = setInterval(render, speed);
    }
    score.textContent = points;
    food = generateFood();
    snake.unshift(head);
  }
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
  snake.unshift(head);
  snake.pop();

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// here this is used to show the food for snake and move the snake

// here we will control the snake
addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (e.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (e.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (e.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
});

function Modal() {
  document.querySelector(".modal").classList.add("activate");
  document.querySelector("#final-score").textContent = points;
  document.querySelector("#final-time").textContent = timeer.textContent;
  stopTimer();
}
document.querySelector("#play-again").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("activate");
  initGame();
});
maxPoints.addEventListener("dblclick", resterMaxScore);
document.addEventListener("DOMContentLoaded", initGame);
