// Geting speed Management
const speedBtn = document.getElementById("fast")
const slowBtn = document.getElementById("slow")
let speed = 1

speedBtn.addEventListener("click", () => {
    speed *= 1.5
})

document.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
        speed *= 1.5
    }
})

slowBtn.addEventListener("click", () => {
    speed /= 1.5
})

document.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        speed /= 1.5
    }
})

export { speed }