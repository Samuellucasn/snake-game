const area = document.querySelector(".area")
const context = area.getContext("2d")

let bloco = 5

let positionX = 10
let positionY = 10
let macaX = 20
let macaY = 10
let velocidadeX = 0
let velocidadeY = 0

let cobra = []
cobra.push({
    x: positionX,
    y: positionY
})
let calda = 5

setInterval(jogo, 90)

document.addEventListener("keydown", (e) => {
    switch(e.keyCode) {
        case 37:
            if (velocidadeX != 1) {
            velocidadeX = -1
            velocidadeY = 0
            }
        break
        case 38:
            if (velocidadeY != -1) {
            velocidadeX = 0
            velocidadeY = 1
            }
        break
        case 39:
            if (velocidadeX != -1) {
            velocidadeX = 1
            velocidadeY = 0
            }
        break
        case 40:
            if (velocidadeY != 1){
            velocidadeX = 0
            velocidadeY = -1
            }
        break
    }
})

function criaBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, area.clientWidth, area.clientHeight/2) 
}

function criaMaca() {
    context.fillStyle = "red"
    context.fillRect(macaX * bloco, macaY * bloco, bloco, bloco/2 )
}

function criaCobra() {
    for (let i = 0; i < cobra.length; i++){
        context.fillStyle = "green"
        context.fillRect(cobra[i].x * bloco, cobra[i].y * bloco, 5 * 2, 5)
        if (cobra[i].x === positionX && cobra[i].y === positionY) {
            velocidadeX = velocidadeY = 0
            calda = 5
        }
    }
}


function jogo() {
    
    positionX += velocidadeX
    positionY -= velocidadeY

    if (positionX < 0) {positionX = 58}
    if (positionX > 58) {positionX = 0}
    if (positionY < 0) {positionY = 29}
    if (positionY > 29) {positionY = 0}

    criaBackground()
    criaMaca()
    criaCobra() 
    
    cobra.push({
        x: positionX,
        y: positionY
    })
    while (cobra.length > calda) {
        cobra.shift()
    }

    if (macaX===positionX && macaY === positionY) {
        calda++
        macaX = Math.floor(Math.random() * 58)
        macaY = Math.floor(Math.random() * 29)
    }

}