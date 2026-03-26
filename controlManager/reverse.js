// Geting Back Management
const reverseBtn = document.getElementById("reverse")
let reverse = 1

reverseBtn.addEventListener("click", () => {
    reverse -= 2 * reverse
})

document.addEventListener("keydown", (event) => {
    if (event.key === "r" || event.key === "R") {
        reverse -= 2 * reverse
    }
})

export { reverse }