function pointOnCircle(angleRad, radius = r, z = 1) {
    return {
        x: radius * Math.cos(angleRad),
        y: radius * Math.sin(angleRad),
        z
    }
}

const r = 0.25
const pie = Math.PI

const NB_ANGLES = 24

const circle = [
    ...Array.from({ length: NB_ANGLES }, (_, k) => pointOnCircle((2 * pie * k) / NB_ANGLES))
]

export { circle }