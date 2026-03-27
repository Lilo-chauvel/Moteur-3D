import * as move from "../3DManager/3D_movement.js"


const PI = Math.PI
const NB_ANGLES = 30

function circleCreator(centerPoint, radius, lastAxe, numberLigne = 4) {
    let boardPoint = []
    switch (lastAxe) {
        case 'z':
            for (let i = 0; i < PI; i += PI / numberLigne) {
                boardPoint.push(...Array.from({ length: NB_ANGLES }, (_, k) => {
                    const p = pointOnCircle_xy((2 * PI * k) / NB_ANGLES, radius)
                    return move.rotate_xz(p, i)
                }))
            }
            return boardPoint

        case 'x':
            for (let i = 0; i < PI; i += PI / numberLigne) {
                boardPoint.push(...Array.from({ length: NB_ANGLES }, (_, k) => {
                    const p = pointOnCircle_yz((2 * PI * k) / NB_ANGLES, radius)
                    return move.rotate_xz(p, i)
                }))
            }
            return boardPoint
        default:
            for (let i = 0; i < PI; i += PI / numberLigne) {
                boardPoint.push(...Array.from({ length: NB_ANGLES }, (_, k) => {
                    const p = pointOnCircle_zx((2 * PI * k) / NB_ANGLES, radius)
                    return move.rotate_xy(p, i)
                }))
            }
            return boardPoint
    }

}


function pointOnCircle_xy(angleRad, radius, z = 0) {
    return {
        x: radius * Math.cos(angleRad),
        y: radius * Math.sin(angleRad),
        z
    }
}
function pointOnCircle_yz(angleRad, radius, x = 0) {
    return {
        y: radius * Math.cos(angleRad),
        z: radius * Math.sin(angleRad),
        x
    }
}
function pointOnCircle_zx(angleRad, radius, y = 0) {
    return {
        z: radius * Math.cos(angleRad),
        x: radius * Math.sin(angleRad),
        y
    }
}

export { circleCreator }