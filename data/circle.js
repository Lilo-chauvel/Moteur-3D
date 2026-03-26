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
const pie = Math.PI

const NB_ANGLES = 24

const circle = [
    // ...Array.from({ length: NB_ANGLES }, (_, k) => pointOnCircle_xy((2 * pie * k) / NB_ANGLES)),
    ...Array.from({ length: NB_ANGLES }, (_, k) => pointOnCircle_yz((2 * pie * k) / NB_ANGLES)),
    ...Array.from({ length: NB_ANGLES }, (_, k) => pointOnCircle_zx((2 * pie * k) / NB_ANGLES)),
]

export { circle }