//3D
import * as print from "./3DManager/print_on_screen.js"
import * as move from "./3DManager/3D_movement.js"
//Controle
import { isPaused } from "./controlManager/break.js"
import { reverse } from "./controlManager/reverse.js"
import { speed } from "./controlManager/speed.js"
import * as position from "./controlManager/position.js"
//Data
import { circle } from "./data/circle.js"
import { cube } from "./data/cube.js"
import { sun } from "./data/sun.js"
import { krokmou } from "./data/krokmou.js"
import { star } from "./data/star.js"
//Creator
import * as creator from "./creator/circle.js"

// Frame Management
const FPS = 60
const BASE_ROTATION_SPEED = 0.5 * Math.PI
let dz = 1
let dx = 1
let dy = 0.75
let angle = 0
let lastFrameTime = 0

function frameV2(p, deltaTime) {
    if (!isPaused) {
        // Distance on axeZ on each frame
        // dz += reverse * 0.5 * dt * speed
        // dx += reverse * 0.5 * dt * speed
        // dy += reverse * 0.5 * dt * speed

        // Rotate angle for each frame
        angle += reverse * BASE_ROTATION_SPEED * deltaTime * speed

        // Print the black background
        print.clear()

        // Boucle on forme
        p.forEach(forme => {
            for (const [i, v] of forme.entries()) {
                // Move point
                let vMove = move.translate_z(move.rotate_xz(move.rotate_xy(v, angle), angle), dz)
                let vNextMove = move.translate_z(move.rotate_xz(move.rotate_xy(forme[(i + 1) % forme.length], angle), angle), dz)

                // Keyboard controller
                // vMove = move.translate_z(vMove,dz*position.axeZ)
                vMove = move.translate_x(vMove, position.axeX)
                vMove = move.translate_y(vMove, position.axeY)
                vNextMove = move.translate_x(vNextMove, position.axeX)
                vNextMove = move.translate_y(vNextMove, position.axeY)

                // Get point for print
                let v2D = { ...print.screen(print.project(vMove)), s: 4 }
                let nextV2D = { ...print.screen(print.project(vNextMove)), s: 4 }

                // Print point and line from point to next point
                print.point(v2D);
                // print.line(v2D, nextV2D, 3)
            }
        });
    }
}

// frome creator
let r2 = 0.25
let circle2 = creator.circleCreator(0, r2, 'x', 4)
let circle3 = creator.circleCreator(0, r2 * 2, 'x', 4)

// Start
// setTimeout(() => frameV2([cube]), 1000 / FPS);

const shapeSelect = document.getElementById("shapeSelect")
const shapes = {
    cube,
    circle,
    sun,
    krokmou,
    star
}

const scene = [cube]

if (shapeSelect) {
    shapeSelect.addEventListener("change", (event) => {
        const selectedShape = shapes[event.target.value]
        if (selectedShape) {
            scene[0] = selectedShape
        }
    })
}

function loop(time) {
    if (lastFrameTime === 0) {
        lastFrameTime = time
    }

    const deltaTime = (time - lastFrameTime) / 1000
    lastFrameTime = time

    frameV2(scene, deltaTime)
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)