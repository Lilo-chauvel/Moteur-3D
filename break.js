// Break Management
const breakBtn = document.getElementById("break")
let isPaused = false

breakBtn.addEventListener("click", () => {
    isPaused = !isPaused
})

export {isPaused}