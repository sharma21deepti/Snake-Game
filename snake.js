let InputDir = { x: 0, y: 0 };
const gamesound = new Audio("Assets/Wallpaper.mp3");
const gameover = new Audio("Assets/gameover.mp3");
let speed = 2;
let score=0;
let hiscoreval=0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 10 };

function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime)
  if((ctime - lastPaintTime)/1000 < 1/speed){
    return;
}
else{
  lastPaintTime = ctime;
  gameEngine();
}
}
function isCollide(snake) {
  // If you bump into yourself 
  for (let i = 1; i < snakeArr.length; i++) {
      if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
          return true;
          
      }
  }
  // If you bump into the wall
  if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
      return true;
      
  }
      
  return false;
}

function gameEngine() {
 // Part 1: Updating the snake array & Food
 if(isCollide(snakeArr)){
  
  gameover.play();
   
  gamesound.pause();
  
  InputDir =  {x: 0, y: 0}; 
  alert("Game Over. Press any key to play again!");
  snakeArr = [{x: 13, y: 15}];
  musicSound.play();
  
  document.getElementById(value).innerHTML=0;
}

// If you have eaten the food, increment the score and regenerate the food
if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
  
  score += 1;
  
  if(score>hiscoreval){
      hiscoreval = score;
      document.getElementById("highvalue").innerHTML=hiscoreval;
      
  }
  document.getElementById("value").innerHTML=score;
  snakeArr.unshift({x: snakeArr[0].x + InputDir.x, y: snakeArr[0].y + InputDir.y});
  let a = 2;
  let b = 16;
  food = {x: Math.round(a + (b-a)* Math.random()), 
    y: Math.round(a + (b-a)* Math.random())}

}
// Moving snake body
for (let i = snakeArr.length - 2; i>=0; i--) { 
  snakeArr[i+1] = {...snakeArr[i]};
}

snakeArr[0].x += InputDir.x;
snakeArr[0].y += InputDir.y;
  // 2 display snake and food
  board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
       let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    InputDir = {x: 0, y: 1} // Start the game
    gamesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            InputDir.x = 0;
            InputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            InputDir.x = 0;
            InputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            InputDir.x = -1;
            InputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            InputDir.x = 1;
            InputDir.y = 0;
            break;
        default:
            break;
    }

});