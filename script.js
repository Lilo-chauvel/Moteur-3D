//3D
import * as print from "./3DManager/print_on_screen.js"
import * as move from "./3DManager/3D_movement.js"
//Controle
import { isPaused } from "./buttonManager/break.js"
import { reverse } from "./buttonManager/reverse.js"
import { speed } from "./buttonManager/speed.js"
//Data
import { circle } from "./data/circle.js"
import { cube } from "./data/cube.js"
import { sun } from "./data/sun.js"
//Creator
import * as creator from "./creator/circle.js"

// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 0.75
let angle = 0

// Main
// setTimeout(frame, 1000 / FPS);

function frameV2(p) {
    if (!isPaused) {
        // dz += reverse * 0.5 * dt * speed
        angle += reverse * Math.PI * dt * speed,
            print.clear()
        p.forEach(forme => {
            for (const v of forme) {
                print.printRect({ ...print.screen(print.project(move.translate_z(move.rotate_xz(move.rotate_xy(v,angle/2), angle), dz))), s: 1 })
            }
        });
        setTimeout(frameV2, 1000 / FPS, p);
    } else {
        setTimeout(frameV2, 1000 / FPS, p);
    }
}

let circle2 = creator.circleCreator(0,0.25,8)
console.log(circle==circle2)
console.log("Circle")
console.log(circle)
console.log("Circle 2")
console.log(circle2)

setTimeout(() => frameV2([circle2]), 1000 / FPS);