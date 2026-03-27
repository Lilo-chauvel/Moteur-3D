// Default value
const BACKGROUND = "black"
const COLOR_PRINT = "#ff4400"
const GAME_CUBE_SIZE = 800

game.width = GAME_CUBE_SIZE
game.height = GAME_CUBE_SIZE
console.log(game)


const ctx = game.getContext("2d")
console.log(ctx)

function clear() {
    ctx.fillStyle = BACKGROUND
    ctx.fillRect(0, 0, game.width, game.height)
}

// Printer
function point({ x, y, s = 20, color = COLOR_PRINT }) {
    if (s < 0) {
        s = 0
    }
    ctx.fillStyle = color
    ctx.fillRect(x - (s / 2), y - (s / 2), s, s)
}
function line(a, b, s = 1) {
    ctx.strokeStyle = COLOR_PRINT
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke();
}

function screen(p) {
    return {
        x: (game.width / 2) * (1 + p.x),
        y: (game.height / 2) * (1 - p.y)
    }
}

function project({ x, y, z }) {
    return {
        x: x / z,
        y: y / z
    }
}


export { clear, point, line, screen, project }
