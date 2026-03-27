//3D
import * as print from "./3DManager/print_on_screen.js"
import * as move from "./3DManager/3D_movement.js"
//Controle
import { isPaused } from "./controlManager/break.js"
import { reverse } from "./controlManager/reverse.js"
import { speed } from "./controlManager/speed.js"
import { axeY } from "./controlManager/position.js"
//Data
import { circle } from "./data/circle.js"
import { cube } from "./data/cube.js"
import { sun } from "./data/sun.js"
import {krokmou} from "./data/krokmou.js"
import {star} from "./data/star.js"
//Creator
import * as creator from "./creator/circle.js"

// Frame Management
const FPS = 60
const dt = 1 / FPS
let dz = 5
let angle = 0

// Main
// setTimeout(frame, 1000 / FPS);

function frameV2(p) {
    if (!isPaused) {
        // dz += reverse * 0.5 * dt * speed
        angle += reverse *0.5 * Math.PI * dt * speed,
            print.clear()
        p.forEach(forme => {
            for (const [i, v] of forme.entries()) {
            let v2D = { ...print.screen(print.project(move.translate_z(move.rotate_xz(move.rotate_xy(v,angle), angle), dz))), s: 4 }
            let nextV2D = {...print.screen(print.project(move.translate_z(move.rotate_xz(move.rotate_xy(forme[(i+1)% forme.length],angle), angle), dz))), s: 4 }
            
            print.point(v2D);
            // print.line(v2D, nextV2D)
        }
        });
        // console.log(axeY)
        setTimeout(frameV2, 1000 / FPS, p);
    } else {
        setTimeout(frameV2, 1000 / FPS, p);
    }
}

let r2 = 0.25
let circle2 = creator.circleCreator(0, r2, 'x', 4)
let circle3 = creator.circleCreator(0, r2*2, 'x', 4)

setTimeout(() => frameV2([cube]), 1000 / FPS);