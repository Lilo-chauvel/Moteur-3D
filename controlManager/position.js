import * as move from "./3DManager/3D_movement.js"

let axeY

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown") {
        axeY = "active"
    }
})

export { axeY }