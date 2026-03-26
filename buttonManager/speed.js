// Geting speed Management
const speedBtn = document.getElementById("fast")
const slowBtn = document.getElementById("slow")
let speed = 1

speedBtn.addEventListener("click", () => {
    speed *= 1.5
})

slow.addEventListener("click", () => {
    speed /= 1.5
})

export { speed }