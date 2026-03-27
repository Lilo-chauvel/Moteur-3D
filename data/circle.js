import * as move from "../3DManager/3D_movement.js"

function pointOnCircle_xy(angleRad, radius = r, z = 0) {
    return {
        x: radius * Math.cos(angleRad),
        y: radius * Math.sin(angleRad),
        z
    }
}
function pointOnCircle_yz(angleRad, radius = r, x = 0) {
    return {
        y: radius * Math.cos(angleRad),
        z: radius * Math.sin(angleRad),
        x
    }
}
function pointOnCircle_zx(angleRad, radius = r, y = 0) {
    return {
        z: radius * Math.cos(angleRad),
        x: radius * Math.sin(angleRad),
        y
    }
}

const r = 0.25
const r2 = r/2
const PI = Math.PI

const NB_ANGLES = 100

const circle = [
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES)
        return move.rotate_xz(p, 0.5 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES)
        return move.rotate_xz(p, 0.25 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES)
        return move.rotate_xz(p, 0.75 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES)
        return move.rotate_xz(p, PI)
    })
    ,
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES, r2)
        return move.rotate_xz(p, 0.5 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES, r2)
        return move.rotate_xz(p, 0.25 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES, r2)
        return move.rotate_xz(p, 0.75 * PI)
    }),
    ...Array.from({ length: NB_ANGLES }, (_, k) => {
        const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES, r2)
        return move.rotate_xz(p, PI)
    })
]

export { circle }