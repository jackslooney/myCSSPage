console.log("hello");

//Get canvas
const canvas = document.getElementById("snakeGame");
//sets context of game to 2d
const ctx = canvas.getContext("2d");

let speed = 7;

//Sets number of tiles across and down
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

//Sets snake head to middle of screen
let headX = 10
let headY = 10;

//Sets velocity that allows user to move snake
let xVelocity = 0;
let yVelocity = 0;

//game loop that updates screen and calls the function xtimes per second
function game() {
    clearScreen();
    changePosition();
    snake();
    setTimeout(game, 1000/speed);
}

//clears the screen
function clearScreen(){
    ctx.fillStyle = "white";
    //fills rectangle with the above color starting at the x and y points indicated to the width of the canvas
    ctx.fillRect(0,0, canvas.width, canvas.height); 
}

//defines the snake
function snake(){
    ctx.fillStyle = "#66105E";
    //draws snake in the middle of screen
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

//Changes the snakes position
function changePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

//Adds an event listener that knows when the arrow keys are pressed
document.body.addEventListener("keydown", keyDown);

//Moves snake according to the arrow keys pressed
function keyDown(event){
    
    //left
    if(event.keyCode == 37){
        yVelocity = 0;
        xVelocity = -1;
    }
    //up
    if(event.keyCode == 38){
        yVelocity = -1;
        xVelocity = 0;
    }
    //right
    if(event.keyCode == 39){
        yVelocity = 0;
        xVelocity = 1;
    }
    //down
    if(event.keyCode == 40){
        yVelocity = 1;
        xVelocity = 0;
    }
}

game();