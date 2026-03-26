// Break Management
const breakBtn = document.getElementById("break")
let isPaused = false

breakBtn.addEventListener("click", () => {
    isPaused = !isPaused
})

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault()
        isPaused = !isPaused
    }
})

export { isPaused }