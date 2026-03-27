function translate_z({ x, y, z }, dz) {
    return { x, y, z: z + dz }
}

function translate_x({ z, y, x }, dx) {
    return { x: x + dx, y, z }
}

function translate_y({ z, y, x }, dy) {
    return { x, y: y + dy, z }
}

function rotate_xz({ x, y, z }, angle) {
    return {
        x: x * Math.cos(angle) - z * Math.sin(angle),
        y,
        z: x * Math.sin(angle) + z * Math.cos(angle)
    }
}

function rotate_xy({ x, y, z }, angle) {
    return {
        x: x * Math.cos(angle) - y * Math.sin(angle),
        y: x * Math.sin(angle) + y * Math.cos(angle),
        z
    }
}

function rotate_yz({ x, y, z }, angle) {
    return {
        z: z * Math.cos(angle) - y * Math.sin(angle),
        y: z * Math.sin(angle) + y * Math.cos(angle),
        x
    }
}

export { rotate_xz, translate_z, translate_x, translate_y, rotate_xy, rotate_yz }