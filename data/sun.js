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

const r = 0.25
const PI = Math.PI

const NB_ANGLES = 24
const RAYON_DEBUT = 0.15
const RAYON_FIN = 0.35
const NB_CERCLES_INTERMEDIAIRES = 12

function buildCirclesBetween(pointBuilder, radiusStart, radiusEnd, intermediateCount, nbAngles = NB_ANGLES) {
    const totalCircles = intermediateCount + 2
    return Array.from({ length: totalCircles }, (_, i) => {
        const t = i / (totalCircles - 1)
        const radius = radiusStart + (radiusEnd - radiusStart) * t
        return Array.from({ length: nbAngles }, (_, k) => pointBuilder((2 * PI * k) / nbAngles, radius))
    }).flat()
}

const sun = [
    ...buildCirclesBetween(pointOnCircle_xy, RAYON_DEBUT, RAYON_FIN, NB_CERCLES_INTERMEDIAIRES),
    ...buildCirclesBetween(pointOnCircle_yz, RAYON_DEBUT, RAYON_FIN, NB_CERCLES_INTERMEDIAIRES)
]

export { sun }