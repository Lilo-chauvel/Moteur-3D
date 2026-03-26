//3D
import * as print from "./3DManager/print_on_screen.js"
import * as move from "./3DManager/3D_movement.js"
//Controle
import { isPaused } from "./buttonManager/break.js"
import { reverse } from "./buttonManager/reverse.js"
import { speed } from "./buttonManager/speed.js"
//Data
import { circle } from "./Data/circle.js"
import { cube } from "./Data/cube.js"

// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 1
let angle = 0

function frame() {
    if (!isPaused) {
        dz += reverse * 0.5 * dt * speed
        angle += Math.PI * dt * speed,
            print.clear()
        for (const v of cube) {
            print.printRect({ ...print.screen(print.project(move.translate_z(move.rotate_xz(v, angle), dz))), s: 7 })
        }
        // for (const v of circle) {
        //     printRect({ ...screen(project(translate_z(rotate_xz(v,angle),dz))), s: 15 })
        // }
        setTimeout(frame, 1000 / FPS);
    } else {
        setTimeout(frame, 1000 / FPS);
    }
}

// Main
// setTimeout(frame, 1000 / FPS);

function frameV2(p) {
    if (!isPaused) {
        // dz += reverse * 0.5 * dt * speed
        angle += Math.PI * dt * speed,
            print.clear()
        p.forEach(forme => {
            for (const v of forme) {
            print.printRect({ ...print.screen(print.project(move.translate_z(move.rotate_xz(v, angle), dz))), s: 7 })
            }
        });
        setTimeout(frameV2, 1000 / FPS, p);
    } else {
        setTimeout(frameV2, 1000 / FPS, p);
    }
}

console.log(circle)
setTimeout(frameV2([circle]), 1000 / FPS);
