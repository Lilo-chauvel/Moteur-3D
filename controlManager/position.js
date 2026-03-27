import * as move from "../3DManager/3D_movement.js"

let axeY = 0
let axeX = 0

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown") {
        axeY -= 0.05
    }
})
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        axeY += 0.05
    }
})

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        axeX -= 0.05
    }
})
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        axeX += 0.05
    }
})

export { axeY, axeX}