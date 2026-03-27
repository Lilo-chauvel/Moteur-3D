//3D
import * as print from "./3DManager/print_on_screen.js"
import * as move from "./3DManager/3D_movement.js"
//Controle
import { isPaused } from "./controlManager/break.js"
import { reverse } from "./controlManager/reverse.js"
import { speed } from "./controlManager/speed.js"
//Data
import { circle } from "./data/circle.js"
import { cube } from "./data/cube.js"
import { sun } from "./data/sun.js"
//Creator
import * as creator from "./creator/circle.js"

// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 0.4
let angle = 0

// Main
// setTimeout(frame, 1000 / FPS);

function frameV2(p) {
    if (!isPaused) {
        dz += reverse * 0.5 * dt * speed
        angle += Math.PI * dt * speed,
            print.clear()
        p.forEach(forme => {
            for (const v of forme) {
                print.printRect({ ...print.screen(print.project(move.translate_z(move.rotate_yz(v,angle), dz))), s: 4 })
            }
        });
        setTimeout(frameV2, 1000 / FPS, p);
    } else {
        setTimeout(frameV2, 1000 / FPS, p);
    }
}

let r2 = 0.25
let circle2 = creator.circleCreator(0,r2,'x',15)
console.log(circle==circle2)
console.log("Circle")
console.log(circle)
console.log("Circle 2")
console.log(circle2)

setTimeout(() => frameV2([circle2]), 1000 / FPS);