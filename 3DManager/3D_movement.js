function translate_z({ x, y, z }, dz) {
    return { x, y, z: z + dz }
}

function rotate_xz({ x, y, z }, angle) {
    return {
        x: x * Math.cos(angle) - z * Math.sin(angle),
        y,
        z: x * Math.sin(angle) + z * Math.cos(angle)
    }
}

export {rotate_xz, translate_z}