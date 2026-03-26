import { circle } from "./circle.js"
import { cube } from "./cube.js"

const BACKGROUND = "black"
const COLOR_PRINT = "#019b01"

game.width = 800
game.height = 800
console.log(game)


// 3D Management
const ctx = game.getContext("2d")
console.log(ctx)

function clear() {
    ctx.fillStyle = BACKGROUND
    ctx.fillRect(0, 0, game.width, game.height)
}

function printRect({ x, y, s = 20, color = COLOR_PRINT }) {
    if (s < 0) {
        s = 0
    }
    ctx.fillStyle = color
    ctx.fillRect(x - (s / 2), y - (s / 2), s, s)
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

function translate_z({ x, y, z }, dz) {
    return { x, y, z: z + dz }
}

function rotate_xz({ x, y, z }, angle) {
    return {
        x: x * Math.cos(angle) - z * Math.sin(angle),
        y,
        z: x * Math.sin(angle) + z * Math.cos(angle)
    }
}


// Break Management
const breakBtn = document.getElementById("break")
let isPaused = false

breakBtn.addEventListener("click", () => {
    isPaused = !isPaused
})





// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 0
let angle = 0

function frame() {
    if (isPaused) {
        setTimeout(frame, 1000 / FPS);
    } else {
        if (isReverse) {
            dz += - 0.5 * dt * fast
        } else {
            dz += 0.5 * dt * fast
        }
        angle += Math.PI * dt * fast,
            clear()
        for (const v of cube) {
            printRect({ ...screen(project(translate_z(rotate_xz(v, angle), dz))), s: 7 })
        }
        // for (const v of circle) {
        //     printRect({ ...screen(project(translate_z(rotate_xz(v,angle),dz))), s: 15 })
        // }
        setTimeout(frame, 1000 / FPS);

    }
}


// Main
setTimeout(frame, 1000 / FPS);
