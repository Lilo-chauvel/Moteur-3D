import { circle } from "./circle.js"
import {cube} from "./cube.js"

const BACKGROUND = "black"
const COLOR_PRINT = "#019b01"

console.log(game)
game.width = 800
game.height = 800


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


const FPS = 60
let dz = 1

function frame() {
    const dt = 1 / FPS
    dz += 1 * dt
    clear()
    for (const v of cube) {
        printRect({ ...screen(project(translate_z(v, dz))), s: 10 })
    }
    for (const v of circle) {
        printRect({ ...screen(project(v)), s: 7 })
    }
    setTimeout(frame, 1000 / FPS);
}

setTimeout(frame, 1000 / FPS);
