import { circle } from "./Data/circle.js"
import { cube } from "./Data/cube.js"
import { clear, printRect, screen, project } from "./3DManager/print_on_screen.js"
import { rotate_xz, translate_z } from "./3DManager/3D_movement.js"
import { isPaused } from "./buttonManager/break.js"
import { reverse } from "./buttonManager/reverse.js"
import { speed } from "./buttonManager/speed.js"

// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 0
let angle = 0

function frame() {
    if (!isPaused) {
        dz += reverse * 0.5 * dt * speed
        angle += Math.PI * dt * speed,
            clear()
        for (const v of cube) {
            printRect({ ...screen(project(translate_z(rotate_xz(v, angle), dz))), s: 7 })
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
setTimeout(frame, 1000 / FPS);