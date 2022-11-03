const area = document.querySelector(".area")
const context = area.getContext("2d")

let block = 7

let positionX = 10
let positionY = 10
let appleX = 20
let appleY = 10
let speedX = 0
let speedY = 0

let snake = []

snake.push({
    x: positionX,
    y: positionY
})

let tail = 5

setInterval(game, 90)

document.addEventListener("keydown", (e) => {
    switch(e.keyCode) {
        case 37:
            if (speedX != 1) {
            speedX = -1
            speedY = 0
            }
        break
        case 38:
            if (speedY != -1) {
            speedX = 0
            speedY = 1
            }
        break
        case 39:
            if (speedX != -1) {
            speedX = 1
            speedY = 0
            }
        break
        case 40:
            if (speedY != 1){
            speedX = 0
            speedY = -1
            }
        break
    }
})

function makeBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, area.clientWidth, area.clientHeight) 
}

function makeApple() {
    context.fillStyle = "red"
    context.fillRect(appleX * block, appleY * block, block, block )
}

function makeSnake() {
    for (let i = 0; i < snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x * block, snake[i].y * block, block, block)
        if (snake[i].x === positionX && snake[i].y === positionY) {
            speedX = speedY = 0
            tail = 5
        }
    }
}


function game() {
    
    positionX += speedX
    positionY -= speedY

    if (positionX < 0) {positionX = 56}
    if (positionX > 56) {positionX = 0}
    if (positionY < 0) {positionY = 56}
    if (positionY > 56) {positionY = 0}

    makeBackground()
    makeApple()
    makeSnake() 
    
    snake.push({
        x: positionX,
        y: positionY
    })

    while (snake.length > tail) {
        snake.shift()
    }

    if (appleX === positionX && appleY === positionY) {
        tail++
        appleX = Math.floor(Math.random() * 58)
        appleY = Math.floor(Math.random() * 29)
    }

}